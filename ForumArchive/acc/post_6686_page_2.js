[{"Owner":"reddozen","Date":"2014-05-27T12:03:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strong_gt_Collada Animation_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_It_t_s not likely that it will come up with anyone else before it_t_s fixed_co_ but here_t_s the bug reported to Blender._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//developer.blender.org/T40374_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.blender.org/T40374_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll pick back up on this once they get it resolved in Blender._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Octree_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_I guess I_t__t_ll work on the octree stuff for now. Anyone have an idea what_t_s going wrong with this? No matter where I initialize the octree. It basically shows none of my models._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-05-27T14:21:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Soooo... gryff... now I_t_m getting triplication._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So now I can stop worrying about men in white coats coming to take me away _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Read the report you filed The issue of the frames imported as I said above was due to the frame rate setting - older versions were set to 24fps newer versions set to 30fps - so that is not an issue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck - will be watching the result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-05-27T14:44:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I added the image and updated the report._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now if we can figure out the octrees and accessing the models after they_t_ve been created._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-28T22:41:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For the octree you have to construct it AFTER having loaded every mesh _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-05-29T00:58:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_40479_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6686_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1401316903_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For the octree you have to construct it AFTER having loaded every mesh _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That worked._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m guessing there_t_s no way to know for sure once the whole scene is loaded through BABYLON.SceneLoader.ImportMesh?_lt_/p_gt__lt_p_gt_How would that work with incremental loading since everything isn_t_t loaded from the start?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-31T16:12:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_for this kind of things_co_ you can ask scene.isReady()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-31T16:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Or even better_dd_ scene.executeWhenReady(func)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-05-31T21:00:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Scene.isReady doesn_t_t seem to work for this. I_t_ll try scene.executeWhenReady(func)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This still causes nothing to render with BABYLON.SceneLoader.ImportMesh()_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Once the scene is loaded_co_ just register a render loop to render itif (scene.isReady()){    //scene.createOrUpdateSelectionOctree()_sm_    engine.runRenderLoop(function() {        scene.render()_sm_          scene.createOrUpdateSelectionOctree()_sm_    }}_lt_/pre_gt__lt_p_gt_EDIT_dd__lt_/p_gt__lt_p_gt_scene.executeWhenReady(func) seems to work. Now I_t_ll play with it some._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-17T23:49:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Back to this..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a monster that loads now... no errors int he console_co_ but I can_t_t get the animation to start. Tap the back arrow key and you_t_ll see the monster._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I even tried calling this from the execute when ready section_co_ but you get an error _qt__lt_span_gt__lt_span_gt_TypeError_dd_ b is null_qt__lt_/span_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_scene.beginAnimation(scene.getMeshByName(_qt_Boss_Pukui_qt_)_co_ 0_co_ 250_co_ true)_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-18T01:18:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Are you sure this returns an object_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_scene.getMeshByName(_qt_Boss_Pukui_qt_) ?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-18T01:26:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_From my point of view your object has no animations (mesh.animations.length _eq__eq_ 0)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-18T01:47:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43156_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6686_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1403054326_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Are you sure this returns an object_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_scene.getMeshByName(_qt_Boss_Pukui_qt_) ?_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s my point... I can_t_t seem to reference an object int he scene by name._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43158_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6686_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1403054785_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_From my point of view your object has no animations (mesh.animations.length _eq__eq_ 0)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_weird... I exported it from blender_co_ and there_t_s 250 frames of data in the *.babylon file..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-18T04:17:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Red_co_ well if the_qt_monster is that pig-looking thing - I seemed to load right inside it !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I got no errors apart from _qt__lt_em_gt_The character encoding of the HTML document was not declared  ... _lt_/em_gt__qt_ and a warning about _qt__lt_em_gt_Synchronous XMLHttpRequest on the main thread is deprecated ..._lt_/em_gt__qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Want to PM  a link to its .blend file for the monster?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ohh_co_ and reducing camera speed might help - I career all over the place._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-18T11:23:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yea_co_ the scene is very much so a work in progress.It_t_s more a test than anything._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll send you a link to the blend file._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-18T20:35:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well red_co_ I opened the .blend file in Blender_co_ exported the .babylon file then set it up with_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_Boss_Pukui.babylon_qt__co_ engine_co_ function (newScene) {....})_sm__lt_/pre_gt__lt_p_gt_Worked fine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Inspection of the babylon file shows a 250 frame animation as you said._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will investigate further using the _qt_BABYLON.SceneLoader.ImportMesh_qt_ option._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-18T22:32:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yea_co_ it loads in the scene for me_co_ it just doesn_t_t animate._lt_/p_gt__lt_p_gt_Maybe I_t_m doing something wrong?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-19T02:37:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well red_co_ I tried using the same type of code as I used for my _lt_a href_eq__qt_http_dd_//www.3dworlds.ca/1webgl/desk/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Desk and Book animation experiment _lt_/a_gt__dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here is the result _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/Pukui/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Pukui_lt_/a_gt_. Click on the cubes to try and start the animation and in my FF web console I get _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_TypeError_dd_ b is undefined_lt_/pre_gt__lt_p_gt_I have no idea what that means. Edit_dd_ with the correct syntax as outlined by DK below this is gone and it works like a charm. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I added a few lines to try and debug you will see them in the ImportMesh_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_Boss_Pukui.babylon_qt__co_ newScene_co_ function (newMeshes_co_skeletons) {                                                thePig _eq_ newMeshes[0]_sm_                mySkeleton[0] _eq_ skeletons[0]_sm_                console.log(thePig)_sm_                console.log(thePig.name)_sm_                                console.log(thePig.animations)_sm_                //newScene.beginAnimation(mySkeleton[0]_co_ 1_co_ 250_co_ false_co_ 1)_sm_                //thePig.position.x _eq_ 10_sm_                                                })_sm__lt_/pre_gt__lt_p_gt_and the results show up in the web console - most significantly is the empty animations array. If I use the _lt_u_gt__qt_thePig.position.x _eq_ 10_sm__lt_/u_gt__qt_ - that works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Maybe I_t_m doing something wrong?_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well if you are - I_t_m must be doing it too. But as I_t_m using essentially the same code as the desk and book_co_ I_t_m not sure what._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will post again if I have a blinding flash of inspiration._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-19T03:25:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hehe the right signature is_dd__lt_/p_gt__lt_p_gt__lt_span_gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_ImportMesh_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt_Boss_Pukui.babylon_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ newScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_newMeshes_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_strong_gt_particleSystems_lt_/strong_gt__co_ _lt_/span_gt__lt_span_gt_skeletons_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-19T03:39:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And now it works like a charm. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ alt_eq__qt__dd_rolleyes_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_TY DK._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Syntax will get me every time it can _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-19T11:56:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_awesome... it works._lt_/p_gt__lt_p_gt_now for the other problems..._lt_/p_gt__lt_p_gt_1) can I control the frame speed?_lt_/p_gt__lt_p_gt_2) the exporter for blender seems to have messed up the model_t_s animations. if you look at his standing animation his legs suck up into his body and deform him (looks like this is happening at several points in the animation string). Could this be due to the merged animation matrix I defined from 3DS? He looks and plays correctly in 3DS and Blender (aside from the animations being too fast). His crown seems to rotate wrong too. it_t_s just supposed to spin on his head_co_ but instead_co_ it_t_s rotating on an arc (if that makes sense)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Gryff_co__lt_/p_gt__lt_p_gt_I figured out the XYZ _qt_duplication_qt_ coming out of 3DS. It was actually defining each independent rotation of the bone separately per animation frame. If you merge the animation matrix on export to open collada_co_ you only get one XYZ set._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DK_co__lt_/p_gt__lt_p_gt_Is merging the matrix the right thing to do? should the babylon blender export merge them on it_t_s own if it sees them? should the babylon blender export support the multiple independent rotations_co_ per bone_co_ per frame of animation? I foresee others having similar problems_co_ so it may be worth defining the scope so people will know._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-19T17:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_1) can I control the frame speed?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The last digit in this line (_qt_1_qt_) controls the playback rate set it to .5 for example_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_newScene.beginAnimation(mySkeleton[0]_co_ 1_co_ 250_co_ false_co_ 1)_sm__lt_/pre_gt__lt_p_gt_By the way_co_ what was the original framerate for the animation? I exported from Blender at 30fps - which maybe why it seems fast._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_2) the exporter for blender seems to have messed up the model_t_s animations._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is a very curious rig It has a lot of _qt_Dummy_qt_ bones. Blender recognizes them_co_ though they have no bones shape_co_  and I have no idea what the exporter does with them. If you look at them in Blender they don_t_t actually move any vertex _lt_u_gt_directly_lt_/u_gt_ but seem to act more like a control bone - controlling other bones - yet they are labeled as deform bones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You might want to do a Google search on _qt_fbx_co_ dummy bones and 3dMax_qt_ as they seem to originate in Max and can cause issues with import and export._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The other suggestion I have is maybe try the fbx exporter that DK has been working on. I gather it now supports animations. Also take a look at my Desk example again - as the doors and drawers are animated just by selecting the translation/rotation for a single bone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-19T18:13:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Officially each animation (there_t_s like 7 all pieced together) has it_t_s own frame rate. The exporter (modified version of UEviewer) doesn_t_t seem to export the official rate for each animation. It_t_s fine though as long as I can control it_co_ I_t_ll just manually set it up when I define the animations available for each monster. The speed will have to fluctuate anyway based on speed power ups for walking or attacking anyway._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s odd about the dummy bones_co_ but there may not be anything I can really do about them given the exporter / 3DS importer I_t_m going to have to use to get them converted (without modifying hundreds of models by hand... no thanks)..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think the FBX exporter supports animations_co_ but not bones yet. DK will have to clarify._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The thing is_co_ the animation plays fine in both 3DS and Blender without the distortion issues... so I_t_m not sure why Babylon would be any different unless there_t_s something odd going on in the export script from Blender._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-19T21:40:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_FBX exporter does not support animations neither bones. For animations I suggest blender or 3dsmax_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For bones_co_ I_t_m still working on support for 3ds max._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-19T22:36:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Ah_co_ I have however already export to FBX with 3ds max to import in Unity 3D and animation was well there._lt_/div_gt__lt_br_gt__lt_div_gt_But I believe the problem was bind the modifier _t_physic_t_ should not use and used instead the modifier _t_skin_t_._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-19T22:57:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43480_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6686_qt_ data-ipsquote-username_eq__qt_dad72_qt_ data-cite_eq__qt_dad72_qt_ data-ipsquote-timestamp_eq__qt_1403217388_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Ah_co_ I have however already export to FBX with 3ds max to import in Unity 3D and animation was well there._lt_/div_gt__lt_div_gt_But I believe the problem was bind the modifier _t_physic_t_ should not use and used instead the modifier _t_skin_t_._lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Where is that option on 3DS?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]