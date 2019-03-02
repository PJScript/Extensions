[{"Owner":"Fedor","Date":"2017-05-09T05:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anybody know why I am not getting error messages in callback functions like the callback of ImportMesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt breaks somehow without telling the console why. This is not standard JS or browser behaviour. Can I somehow turn on error messages?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-09T16:13:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_co_ can you reproduce the issue in the playground? It is impossible to help you without more details\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fedor","Date":"2017-05-27T06:53:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry for my late response_co_ I_t_ll have try... never worked with playgrounds so have to dive into it...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-05-27T09:21:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23675-fedor/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23675_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23675-fedor/_qt_ rel_eq__qt__qt__gt_@Fedor_lt_/a_gt_ _lt_br /_gt_\n\tHi_co__lt_br /_gt_\n\tAre you using the correct callback?_lt_br /_gt_\n\tPlease see this_sm_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#SSRM6S_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#SSRM6S_lt_/a_gt__lt_br /_gt_\n\tit throws a error intentionally_co_ see console _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore info_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe ImportMesh function has three callbacks_co_ 1_sm_ returning the mesh data when loaded_co_ 2_sm_ returning loading progress_co_ and 3_sm_ returning errors._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ // Using .babylon name _qt_skull2_qt_ (should be _qt_skull_qt_). returns a _qt_unable to load..._qt_ error for the purpose of this example.\n\nBABYLON.SceneLoader.ImportMesh(\n _qt__qt__co_ \n _qt_scenes/_qt__co_ \n _qt_skull2.babylon_qt__co_ \n scene_co_\n\n function (newMeshes) {\n  // This callback returns the loaded meshes_co_ particle systems_co_ skeletons.\n\n }_co_\n \n function (progress) {\n  // This callback returns the loading progress of the .babylon file. Can be null.\n\n }_co_\n \n function(scene_co_ err_co_ exc){\n  // This callback returns any errors and/or exceptions encountered while trying to load the .babylon file. Can be null.\n\n  console.log(err_co_ exc)_sm_\n\n }\n)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fedor","Date":"2017-05-27T10:33:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I did not make myself clear_dd_ it is the onsucces callback I don_t_t get any error messages from - it does fire but if any error happens inside the function itself_co_ it just breaks with no message at all. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fedor","Date":"2017-05-27T10:57:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I have made this playground_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease_co_ read past the loading errors. I have not set up this web server properly_co_ but it does not matter too much. This is what happens_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tthe model is loaded and the callback fires\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThe first alert is shown. Click it.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThe script tries to set an non existing element in a non existing array. I would expect to see an error message in the javascript console that says something about arrays and me being a sloppy programmer. But it doesn_t_t.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThe script stops_co_ never reaching the second alert. You will not see it on your screen.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tWhere is my error message? Stupid that you only miss it when it_t_s gone...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-29T14:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is because the whole callback is ran inside a try catch block_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/babylon.sceneLoader.ts#L173_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/babylon.sceneLoader.ts#L173_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fedor","Date":"2017-06-02T07:05:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tah... ok. Thanks. I_t_ll figure out another way to debug these functions_co_ or just keep out of them as much as possible.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-06-02T07:14:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23675-fedor/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23675_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23675-fedor/_qt_ rel_eq__qt__qt__gt_@Fedor_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tYou can simply throw it inside your own try .. catch _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD#5_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tReferenceError_dd_ testdummy is not defined_lt_br /_gt_\n\t\t\t    at myCallback (eval at compileAndRun (3dc215ab164dd64cca1bffa01e1ff72706b4aefa.js_dd_404)_co_ &lt_sm_anonymous&gt_sm__dd_25_dd_9)_lt_br /_gt_\n\t\t\t    at _ (958e27b….js_dd_17)_lt_br /_gt_\n\t\t\t    at 958e27b….js_dd_17_lt_br /_gt_\n\t\t\t    at XMLHttpRequest.e.onreadystatechange (958e27b….js_dd_3)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr if you had followed my previous post_co_ _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tadd a error callback and the same error will be passed as the exc variable (exceptions)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index2_5.html#X31WKD#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]