[{"Owner":"SteffeX","Date":"2018-09-17T08:47:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_11px_sm__qt__gt_\n\t_lt_div_gt_\n\t\tHi \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tI have an OBJ file that I want to use in a mobile app (within a webview). \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tThe problem is that I can only append the obj file if the web is hosted on a webserver ( according to cross domain rules).\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tIs there a way to solve this problem?\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tCan I store the file as a variable in the javascript and then assign the variable to the sceneloader? ( to prevent the ajax cors call)\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tHere_t_s my code_dd_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.SceneLoader.Append(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_./_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_model.obj_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ scene_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ (newMeshes) {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_  newMeshes.activeCamera _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_null_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_  newMeshes.createDefaultCameraOrLight(_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_  newMeshes.activeCamera.attachControl(canvas_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_})_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-17T15:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can have a look to the sandbox code. We are using the filesInput object to support drag_t_n_t_drop and file picking_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/sandbox/index.js#L265_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/sandbox/index.js#L265_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]