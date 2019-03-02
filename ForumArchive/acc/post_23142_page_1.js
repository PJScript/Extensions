[{"Owner":"kevzettler","Date":"2016-06-12T17:35:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a scene where I create a Sphere. I then use BABYLON.SceneLoader.Append to import a skeleton. I attach the sphere to one of the skeleton bones and it disappears._lt_br /_gt_\n\tYou can see this happening here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//kevzettler.com/robotbones/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//kevzettler.com/robotbones/_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can provide the full source if that would help._lt_br /_gt__lt_br /_gt_\n\tThe source of the scene looks like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const canvas _eq_ document.getElementById(_t_render-container_t_)_sm_\nconst engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\nscene.clearColor _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm_\n\n// This creates and positions a free camera\nvar camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_\ncamera.setTarget(BABYLON.Vector3.Zero())_sm_\ncamera.attachControl(canvas_co_ false)_sm_\n\n// This creates a light_co_ aiming 0_co_1_co_0 - to the sky.\nvar light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\nlight.intensity _eq_ .5_sm_\n\n// Let_t_s try our built-in _t_sphere_t_ shape. Params_dd_ name_co_ subdivisions_co_ size_co_ scene\nvar sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 1_co_ scene)_sm_\nsphere.position.y _eq_ 1_sm_\n\nvar skeletonPlaceholder _eq_ new BABYLON.AbstractMesh(_t__t__co_ scene)_sm_\n\nfunction skeletonLoadHandler(scene){\n  var skeleton _eq_ scene.skeletons[0]_sm_\n  var viewer _eq_ new BABYLON.Debug.SkeletonViewer(skeleton_co_ skeletonPlaceholder_co_ scene)_sm_\n  viewer.isEnabled _eq_ true_sm_ //enables skeleton animation\n\n  sphere.attachToBone(skeleton.bones[1]_co_ skeletonPlaceholder)_sm_\n  var anim _eq_ skeleton.beginAnimation(_qt_ArmatureAction.001_qt__co_ true_co_ 1)_sm_\n}\n\nfunction loadProgressHandler(progress){\n  console.log(_qt_loading_dd_ _qt__co_ progress)_sm_\n}\n\nengine.runRenderLoop(() _eq_&gt_sm_ {\n  scene.render()_sm_\n})_sm_    \n\nwindow.addEventListener(_qt_resize_qt__co_ () _eq_&gt_sm_ {\n  engine.resize()_sm_\n})_sm_\n\nBABYLON.SceneLoader.ShowLoadingScreen _eq_ false_sm_\nBABYLON.SceneLoader.Append(_qt_./assets/models/mechsniper/babylon/_qt__co_ _qt_combined.babylon_qt__co_ scene_co_ skeletonLoadHandler_co_ loadProgressHandler)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-06-12T22:35:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14752-kevzettler/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14752_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14752-kevzettler/_qt_ rel_eq__qt__qt__gt_@kevzettler_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe I and others recently tried to assist you in a seperate post concerning a similar issue with object visability when parenting objects to bones in Blender. For myself (and most likely others_co_) it is important to know your pipeline prior to BJS_co_ and how you generated your skeleton (bones.) As we discussed previously_co_ this is often an issue due to how the skelton bones are identified in any application. However_co_ in looking at the code you provided_co_ the process you use in parenting your object to a bone inside of an array may be the issue. I don_t_t have the time at this moment to test this_co_ but perhaps someone else on the forum may be able to see the problem with the limited code you provided.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise_co_ more info is the key to solving your problem_co_ and if you build a playground scene_co_ this most likely could be solved without delay. Of course_co_ there_t_s always _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ - who obviously hasn_t_t read this post yet - as I_t_m certain we_t_d already see him testing a new playground scene using your code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-06-13T05:10:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2F6AQS%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2F6AQS#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Hey_co_ I_t_ll make a playground for a friend of BJS sometimes_co_ what the heck.  No time to troubleshoot this at the moment_co_ but I see one error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the console_dd_  _lt_em_gt__lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt_WebGL_dd_ drawElements_dd_ bound element array buffer is too small for given count and offset_lt_/span_gt_.  _lt_/em_gt_That _lt_em_gt_could_lt_/em_gt_ indicate a situation in the exporter_co_ I suppose.  JSON lint says it_t_s valid JSON..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep thinking_co_ but I_t_m scared of skeletons.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_   Hopefully_co_ the Monday crew will be able to beat this issue into submission.  Help wanted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14752-kevzettler/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14752_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14752-kevzettler/_qt_ rel_eq__qt__qt__gt_@kevzettler_lt_/a_gt_ - You did _lt_u_gt_no_lt_/u_gt_ hand-editing of the .babylon file after export from Blender 2.76 (sub 0)_co_ right?  (Folks rarely do such edits_co_ but I thought I would ask just the same.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ talk soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2016-06-14T03:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_You did_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_u style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_no_lt_/u_gt__lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span_gt_ _lt_/span_gt_hand-editing of the .babylon file after export from Blender 2.76 (sub 0)_co_ right?  (Folks rarely do such edits_co_ but I thought I would ask just the same.)_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n\t_lt_div_gt_\n\t\t_lt_div_gt_\n\t\t\t_lt_div title_eq__qt_Protected by Grammarly_qt__gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n\t_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tCorrect I did not._lt_br /_gt__lt_br /_gt_\n\tI_t_ve open sourced the sample project_dd__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/kevzettler/robotbones_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/kevzettler/robotbones_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tyou can see the babylon json file here_lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/kevzettler/robotbones/blob/master/assets/models/mechsniper/babylon/combined.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/kevzettler/robotbones/blob/master/assets/models/mechsniper/babylon/combined.babylon_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tThe blender file is also in the /assets directory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe blender file has 2 layers. layer 1 is the armature_co_ layer 2 is the meshes. the meshes are rigged and animated to the armature. When I export I only export layer 1.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-14T15:21:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2F6AQS%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2F6AQS#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kevzettler","Date":"2016-06-14T22:16:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ That works. I was able to achieve that separately. I didn_t_t want to import the other meshes from the blender scene only the skeleton. I guess worst case scenario I can import them and manually hide or remove but wondering why the first approach doesn_t_t work?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-14T22:44:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI just compared the two combined.bablylon files with WinMerge and they are not the same.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]