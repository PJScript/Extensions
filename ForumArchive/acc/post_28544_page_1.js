[{"Owner":"Dad72","Date":"2017-02-19T22:23:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I use your ShaderBuilder_co_ and I need advice please_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLONX.ShaderBuilder.InitializeEngine()_sm_\nvar terrainMaterial _eq_ new BABYLONX.ShaderBuilder()            \n.Map({ path_dd_ textureGround })\n.Reference(1).Map({ path_dd_ _t_images/textures/ground_0.png_t_ _co_ uv_dd__t_vec2(vuv*10.)_t_ })\n.Blue(1_co_ BABYLONX.Helper().Map({ path_dd_ _t_images/textures/grass_4.jpg_t_ _co_ uv_dd__t_vec2(vuv*10.)_t_ }).Build()_co_ {rangeStep_dd_-0.05_co_rangePower_dd_0.05})\n.Red(1_co_ BABYLONX.Helper().Map({ path_dd_ _t_images/textures/rock_4.jpg_t_ _co_ uv_dd__t_vec2(vuv*10.)_t_ }).Build()_co_ {rangeStep_dd_-0.05_co_rangePower_dd_0.05}) \n.BuildMaterial(global.scene)_sm_\t\t\n\nterrain.material _eq_ terrainMaterial_sm_\nterrain.material.specularColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm_\nterrain.material.specularPower _eq_ 64_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_In line 3_dd_ .Map({ path_dd_ _lt_strong_gt_textureGround_lt_/strong_gt_ })_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I would like to use a dynamic texture instead of a path._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var textureGround _eq_ new BABYLON.DynamicTexture(_qt_DynamicTexture_qt__co_ 1024_co_ scene_co_ true)_sm_\t\t\t\t\nvar textureSize _eq_ textureGround.getSize()_sm_\t\t\t\nvar textureContext _eq_ textureGround.getContext()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHow can I do ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T08:05:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_164026_qt_ data-ipsquote-contentid_eq__qt_28544_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487542993_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__co__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_I use your ShaderBuilder_co_ and I need advice please_dd__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_BABYLONX.ShaderBuilder.InitializeEngine()_sm_\n_lt_span_gt_var_lt_/span_gt_ terrainMaterial _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLONX.ShaderBuilder()            \n.Map({ path_dd_ textureGround })\n.Reference(_lt_span_gt_1_lt_/span_gt_).Map({ path_dd_ _lt_span_gt__t_images/textures/ground_0.png_t__lt_/span_gt_ _co_ uv_dd__lt_span_gt__t_vec2(vuv*10.)_t__lt_/span_gt_ })\n.Blue(_lt_span_gt_1_lt_/span_gt__co_ BABYLONX.Helper().Map({ path_dd_ _lt_span_gt__t_images/textures/grass_4.jpg_t__lt_/span_gt_ _co_ uv_dd__lt_span_gt__t_vec2(vuv*10.)_t__lt_/span_gt_ }).Build()_co_ {rangeStep_dd_-_lt_span_gt_0.05_lt_/span_gt__co_rangePower_dd__lt_span_gt_0.05_lt_/span_gt_})\n.Red(_lt_span_gt_1_lt_/span_gt__co_ BABYLONX.Helper().Map({ path_dd_ _lt_span_gt__t_images/textures/rock_4.jpg_t__lt_/span_gt_ _co_ uv_dd__lt_span_gt__t_vec2(vuv*10.)_t__lt_/span_gt_ }).Build()_co_ {rangeStep_dd_-_lt_span_gt_0.05_lt_/span_gt__co_rangePower_dd__lt_span_gt_0.05_lt_/span_gt_}) \n.BuildMaterial(_lt_span_gt_global_lt_/span_gt_.scene)_sm_\t\t\n\nterrain.material _eq_ terrainMaterial_sm_\nterrain.material.specularColor _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Color3(_lt_span_gt_0.5_lt_/span_gt__co_ _lt_span_gt_0.5_lt_/span_gt__co_ _lt_span_gt_0.5_lt_/span_gt_)_sm_\nterrain.material.specularPower _eq_ _lt_span_gt_64_lt_/span_gt__sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_In line 3_dd_ .Map({ path_dd_ _lt_strong_gt_textureGround_lt_/strong_gt_ })_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_I would like to use a dynamic texture instead of a path._lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_var_lt_/span_gt_ textureGround _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.DynamicTexture(_lt_span_gt__qt_DynamicTexture_qt__lt_/span_gt__co_ _lt_span_gt_1024_lt_/span_gt__co_ scene_co_ _lt_span_gt_true_lt_/span_gt_)_sm_\t\t\t\t\n_lt_span_gt_var_lt_/span_gt_ textureSize _eq_ textureGround.getSize()_sm_\t\t\t\n_lt_span_gt_var_lt_/span_gt_ textureContext _eq_ textureGround.getContext()_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHow can I do ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6OZX%2389_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6OZX#89_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can use SetUniform for define your new texture or any new uniform\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand with .material.setTexture you can set your wanted texture (any kind of texture ) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand for use This material in Shader Builder use .Map function \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsample\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        .SetUniform(_t_dyTexture1_t__co__t_sampler2D_t_)          \n        .Map({ index_dd_ _t_dyTexture1_t__co_bias _dd_ 2.})\n        .Reference(1)\n         ...\n        .BuildMaterial(scene)_sm_\n\n\n//  set dynamic texture\n\n        var textureGround _eq_ new BABYLON.DynamicTexture(_qt_DynamicTexture_qt__co_ 1024_co_ scene_co_ true)_sm_\t\t\t\t\n         ground.material.setTexture(_t_dyTexture1_t__co_textureGround)_sm_\n       _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T11:36:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the advice and the PG\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T12:45:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have another Nasimi question. I would like to be able to modify the textures after loading and the uvscale. How do you do it please.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put in bold what I would like to be able to modify after the loading of the ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.Blue(1_co_ BABYLONX.Helper().Map({ path_dd__lt_strong_gt_ global.elevation.texture1_lt_/strong_gt__co_ uv_dd__t_vec2(vuv*_t_+_lt_strong_gt_global.elevation.uvScale_lt_/strong_gt_+_t_)_t_ }).Build()_co_ {rangeStep_dd_-0.48_co_rangePower_dd_0})_lt_br /_gt_\n\t.Red(1_co_ BABYLONX.Helper().Map({ path_dd_ _lt_strong_gt_global.elevation.texture2_lt_/strong_gt__co_ uv_dd__t_vec2(vuv*_t_+_lt_strong_gt_global.elevation.uvScale_lt_/strong_gt_+_t_)_t_ }).Build()_co_ {rangeStep_dd_-0.48_co_rangePower_dd_0})   _lt_br /_gt_\n\t.Green(1_co_ BABYLONX.Helper().Map({ path_dd_ _lt_strong_gt_global.elevation.texture3_lt_/strong_gt__co_ uv_dd__t_vec2(vuv*_t_+_lt_strong_gt_global.elevation.uvScale_lt_/strong_gt_+_t_)_t_ }).Build()_co_ {rangeStep_dd_-0.48_co_rangePower_dd_0})\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd another question_co_ can we add another color after loading loading of ground ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor exemple_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_terrainMaterial.Yellow(1_co_ BABYLONX.Helper().Map({ path_dd_ global.elevation.texture4_co_ uv_dd__t_vec2(vuv*_t_+global.elevation.uvScale+_t_)_t_ }).Build()_co_ {rangeStep_dd_-0.48_co_rangePower_dd_0})_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tor \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_terrainMaterial.add(Yellow(1_co_ BABYLONX.Helper().Map({ path_dd_ global.elevation.texture4_co_ uv_dd__t_vec2(vuv*_t_+global.elevation.uvScale+_t_)_t_ }).Build()_co_ {rangeStep_dd_-0.48_co_rangePower_dd_0}))_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI start with ShaderBuilder which seems complex_co_ but incredibly powerful. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_Thanks for_lt_/span_gt_ help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T12:51:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6OZX%2390_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6OZX#90_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou need define another Uniform\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor example .SetUniform(_t_scaleTxt_t__co__t_vec3_t_)      \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti define Vector 3 because we can manage 3 text scale with that\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can def mat4 for manage 12 parameter with one uniform\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut if you just wanna manage 1 you use float\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyway you change that with setUniform\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T12:53:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tabout color replace\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlet me make a sample for explain full color replace in shader Builder in this post\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6OZX%2392_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6OZX#92_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou just have 8 color    [red_co_green_co_blue_co_cyan_co_pink_co_yellow_co_white_co_black]  in one reference\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can separated any colors to any Step (0-255  recommend use 0-25 in max) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso if you use separated color  for all you have 80 color in one reference\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can define others pattern in other reference too and use that too\n_lt_/p_gt_\n\n_lt_p_gt_\n\t after loading you can not change base custom shader but you can redifine your shaderBuilder and add your wanted color for that\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you wanna use this stuff you can use ReplaceColor method\n_lt_/p_gt_\n\n_lt_table style_eq__qt_border-spacing_dd_0px_sm_border-collapse_dd_collapse_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_line-height_dd_20px_sm_vertical-align_dd_top_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t_lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_\n\t\t\t\t\tReplaceColor(_lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm__qt__gt_index_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__dd__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_number_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm__qt__gt_color_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__dd__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_number_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm__qt__gt_mat_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__dd__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_string_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(237_co_106_co_67)_sm__qt__gt_option_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__dd__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm__qt__gt_IReplaceColor_lt_/span_gt_)\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_\n\t\t\t\t\t//\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tfor example _lt_font color_eq__qt_#0086b3_qt__gt_ _lt_/font_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_ReplaceColor_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_reference index_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__co_ BABYLONX._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Helper_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Blue_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__co_ ... _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_option_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_). _lt_/span_gt_\n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_20px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\tthis is complicated stuff in ShaderBuilder but try to make sample for fully understand this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T14:40:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_164081_qt_ data-ipsquote-contentid_eq__qt_28544_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487595193_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou can separated any colors to any Step (0-255  recommend use 0-25 in max) \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI did not understand that. I notice that I have color confusion between blue and cyan that create a mixture of the two textures. I think its two colors are too close.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also have a confusion between green and black that gives the same texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use all colors disponnible and you can see that the green that should be a texture of rock_co_ gives me sand that is black_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd pink gives a mixture with white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can test it here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylon.actifgames.com/TerrainEditor/index.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylon.actifgames.com/TerrainEditor/index.php_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_11715_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58aaff24f1e79_2017-02-2015_35_13-TerrainEditor.jpg.db3550724a0b179c6845a1e92dcc814b.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_58aaff2516893_2017-02-2015_35_13-TerrainEditor.thumb.jpg.8284517e53a4725b98e0d925b6f29c7f.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11715_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58aaff2516893_2017-02-2015_35_13-TerrainEditor.thumb.jpg.8284517e53a4725b98e0d925b6f29c7f.jpg_qt_ /_gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_11716_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/Delos.png.bfa5843511813dad82a5281fff319578.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Delos.thumb.png.68c7634399350242df3e566abcf74b4b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11716_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/Delos.thumb.png.68c7634399350242df3e566abcf74b4b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T15:46:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcheck you painting  color value\n_lt_/p_gt_\n\n_lt_p_gt_\n\tpink _eq_ #FF00FF\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcyan _eq_  #00FFFF\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYellow _eq_ #FFFF00\n_lt_/p_gt_\n\n_lt_p_gt_\n\tred _eq_ #FF0000\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblue _eq_ #0000FF\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreen _eq_ #00FF00\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhite _eq_ #FFFFFF\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblack _eq_ #000000 \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T15:55:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tpink _eq_ #FF00FF (_eq_ fuchsia) _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_#ffc0cb _eq_ pink_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcyan _eq_  #00FFFF _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#00ffff_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYellow _eq_ #FFFF00 _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#ffff00_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tred _eq_ #FF0000 _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#ff0000_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblue _eq_ #0000FF _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#0000ff_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreen _eq_ #00FF00 (_eq_ lime) _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_#008000 _eq_ green_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhite _eq_ #FFFFFF _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#FFFFFF_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tblack _eq_ #000000  _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_#000000_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a different color for pink and green. But when I create colors by name_co_ it gives me this result for pink and green.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_58ab11725f16a_2017-02-2016_54_58-ShaderBuilderwithdynamicTexture-QuestionsAnswers-HTML5GameDevsForum.jpg.294f558e611a505791256c3f341171ae.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11719_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58ab11725f16a_2017-02-2016_54_58-ShaderBuilderwithdynamicTexture-QuestionsAnswers-HTML5GameDevsForum.jpg.294f558e611a505791256c3f341171ae.jpg_qt_ /_gt_ _lt_img alt_eq__qt_58ab1173154fc_2017-02-2016_55_16-ShaderBuilderwithdynamicTexture-QuestionsAnswers-HTML5GameDevsForum.jpg.d5dfcea2ef5069009b9b4ad4d72e3baa.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11720_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58ab1173154fc_2017-02-2016_55_16-ShaderBuilderwithdynamicTexture-QuestionsAnswers-HTML5GameDevsForum.jpg.d5dfcea2ef5069009b9b4ad4d72e3baa.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T16:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYour pink color is in fact _t_fuchsia_t__lt_br /_gt_\n\tAnd your green color is actually _t_lime_t_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T16:02:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti know but you most set it 00ff00 and ff00ff\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T16:18:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ this perfect _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58ab1697a68c1_2017-02-2017_16_42-TerrainEditor.jpg.ba6b325cd26d75276f0c5fadc0afa1e8.jpg_qt_ data-fileid_eq__qt_11721_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11721_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/58ab1697c322b_2017-02-2017_16_42-TerrainEditor.thumb.jpg.78ca1fdddaf4fe94192c3dcf7f582e7a.jpg_qt_ alt_eq__qt_58ab1697c322b_2017-02-2017_16_42-TerrainEditor.thumb.jpg.78ca1fdddaf4fe94192c3dcf7f582e7a.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor edges how to remove to create a fade?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-20T16:47:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t{rangeStep_dd_ [ for control fade  -0.49  ..  0.49 ] _co_ rangePower_dd_ [ control opacity -1. ..  1.] }\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T17:58:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ thanks Nasimi\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-20T22:53:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__co_ _lt_/span_gt_I have one last problem that I do not get. When I load the terrain with the ShaderBuilder material and its 8 defined textures. I can not change textures for one of the 8 textures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI try to make dispose() on the material_co_ assign another textures and then reload the shaderBuilder_co_ but it does not work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to be able to redefine a textures after loading_co_ how to do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr how to redefine the _lt_u_gt_path_lt_/u_gt_ of an image in a SetUniform(_t_pathvar_t__co_ ???) . sampler2D is for new BABYLON.Texture. But for the _qt_Path_qt__co_ I do not know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-21T09:26:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6OZX%2393_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6OZX#93_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany dynamic changes most be define by SetUniform\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-21T11:38:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ that_t_s the way I thought_co_ but I imagined there might be another way to redefine only the path of the textures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I will do that. Thanks Nasimi for your help with ShaderBuilder.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]