[{"Owner":"Converge","Date":"2018-03-15T08:06:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve encountered a situation where I need to mix two normal maps for my PBR material. One map is the main texture while the second one is tiled detail texture. Much like Unity does with its standard material. What would be the best way to extend the functionality of the current PBR material (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.0/pbrmetallicroughnessmaterial_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.0/pbrmetallicroughnessmaterial_lt_/a_gt_ or at least its PBRBaseSimpleMaterial parent). Amending shader itself and passing a second texture sampler is not a problem for me. I understand I should utilize material library and compile a new material. But should I use existing custom standard material as a basis or there are better ways of doing it? I would love to keep entire PBR shader code in local .fx files instead of replacing custom parts though. I bet many artists working with BJS have encountered similar issue where they_t_d need to tweak existing material and meddle with the shader code but the process of creating anything custom isn_t_t that clear or intuitive. Any tips would be very helpful!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany thanks in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS readme file for custom standard mat states that it would only work with BJS 3.0.0 and I_t_m using the latest stable one. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-03-15T11:40:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2325_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#25_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat is Simple PBR From CustomShader\n_lt_/p_gt_\n\n_lt_p_gt_\n\tu can make any channel for you pbr\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t** \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt__lt_strong_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_reflectPart _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_( sampler Ref_co_ nrm _co_ scale _co_   RefractiveParameter  _co_ direction x _co_ direction y _co_ direction z _co_ bias)_lt_/span_gt__lt_/strong_gt__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tpart1 _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2322_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#22_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ new SB()\n\n        .Map({path_dd__t_https_dd_//i.imgur.com/5b9To6N.jpg_t_}) \n         \n         .InLine( reflectPart(\n            _t_txtRef_0_t__co__t_nrm_t_\n            _co_0.005 _co_-1_co_-1._co_-1._co_-1._co_0.))\n          \n\n        .BuildMaterial(scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tyou can use shader string  for manage any parameter\n_lt_/p_gt_\n\n_lt_p_gt_\n\treflective mix\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2323_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnormal mix\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7AIII8%2324_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7AIII8#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tplay  anything you want and ask me if you have any question about this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7AIII8%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7AIII8#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-15T16:52:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe long term version is either to use the custom material as shown by Nasimi or do as you mentioned_dd_ inherit from PBRBaseMaterial and create an entry in the material library (this way it will be maintained in the core repo)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]