<?php
      /****************************************************************************
       *
       *             _____   __                       .__
       *            /  _  \_/  |_  ____   ____   ____ |__| ____   ____
       *           /  /_\  \   __\/ __ \ /    \_/ ___\|  |/  _ \ /    \
       *          /    |    \  | \  ___/|   |  \  \___|  (  <_> )   |  \
       *          \____|__  /__|  \___  >___|  /\___  >__|\____/|___|  /
       *                  \/          \/     \/     \/               \/
       *
       *
       *           ESTE SCRIPT PHP FUNCIONA CON EL EJEMPLO tree-dinamico.html Y CON tree-ajax.html
       *
       *
       * */

      $data = json_decode($_REQUEST['tree']);

      if ($_REQUEST['tplname'] !="") {
         if ($_REQUEST['maxid']=="true") {
            $output = file_get_contents($_REQUEST['tplname']);
            $counter = 1;
            while( !(strpos($output,"PRUEBA_".$counter)===FALSE) ) {
               $counter++;
            }
            print "{success:true, code:0, msg:'MAXID', maxId:".($counter-1)." }";
         } else if ($_REQUEST['node']=="root" ) {
            $output = file_get_contents($_REQUEST['tplname']);
            print $output;
         } else {
            // SAVE
            $strObj = $_REQUEST['tree'];
            if (count($data) > 0) {
               $arrTreeData = array();
               foreach($data as $obj) {
                  if ( $obj->parentId == "root" ) {
                     $treeData = '{ "id": "'.$obj->id.'", "text": "'.$obj->text.'"';
                     $pos = strpos($strObj,'"parentId":"'.$obj->text.'"');
                     if ( $pos===false ) {
                        $treeData .= ',"leaf":true }';
                     } else {
                        $children = getChildrenOf($obj->text,$obj->children);
                        $treeData .= ',"children":'.$children.' }';
                     }
                     array_push($arrTreeData ,$treeData);
                  }
               }

               $treeData = "[".implode(",",$arrTreeData)."]";

               file_put_contents($_REQUEST['tplname'],$treeData);
               $msg="SAVED";
               print "{success:true, code:0, msg:'$msg'}";
            }
         }
      }

   function getChildrenOf($name, $data) {
      global $strObj;
      $arrTreeData = array();
      foreach($data as $obj) {
         if ($obj->parentId == $name) {
            $treeData = '{ "id": "'.$obj->id.'", "text": "'.$obj->text.'"';
            $pos = strpos($strObj,'"parentId":"'.$obj->text.'"');
            if ( $pos===false ) {
               $treeData .= ',"leaf":true }';
            } else {
               $children = getChildrenOf($obj->text, $obj->children);
               $treeData .= ',"children":'.$children.' }';
            }
            array_push($arrTreeData ,$treeData);
         }
      }
      $treeData = "[".implode(",",$arrTreeData)."]";
      return $treeData;
   }

?>
