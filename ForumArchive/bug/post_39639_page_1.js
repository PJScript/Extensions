[{"Owner":"blondegeek","Date":"2018-08-26T05:52:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PWHHMR_qt_ rel_eq__qt_external nofollow_qt__gt_In this playground example_lt_/a_gt__co_ I create and dispose a simple slider_co_ without attaching the slider to a control panel. This produces an error because this._host (where the attached control panel is referenced) is not defined (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0187c8c61055bf1aa462b0d371383b90a0b702c9/gui/src/2D/controls/control.ts#L1364_qt_ rel_eq__qt_external nofollow_qt__gt_see controls.ts line 1364_lt_/a_gt_). Should line 1364 first check if this._host is defined?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor context_co_ this error has come up for because I have sliders that are only visible and attached to a control panel when the relevant mesh that they control is selected but the mesh they control can be deleted even if not selected. I can provide more details if considered relevant.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks very much!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-08-26T09:40:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour PG did not add AdvancedDynamicTexture. And your slider must also be added before using dispose ()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou must also add a scene_co_ camera and a light to the scene. You do not need to call the engine on the PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PWHHMR%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PWHHMR#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-09-09T15:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you are correct_co_ if you want to be able to dispose controls that have never been added to a texture and hence _link()... never called_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (this._host) {\n    var index _eq_ this._host._linkedControls.indexOf(this)_sm_\n    if (index &gt_sm_ -1) {\n        this.linkWithMesh(null)_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou could always do a Github pull request _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-10T18:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno worry I_t_ll add the fix now _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]