[{"Owner":"jerome","Date":"2017-03-01T10:15:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Folks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have already spoken in this forum about infinite dynamically generated terrains. Nasimi completed a fantastic terrain generator with GeometryBuilder here _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25982-infinity-terrain-in-babylonjs-geometry-builder/?do_eq_embed&amp_sm_comment_eq_148623&amp_sm_embedComment_eq_148623&amp_sm_embedDo_eq_findComment#comment-148623_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tand Dal started a great project here (maybe uncompleted) _dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23590-quadtree-lod-terrain/?do_eq_embed&amp_sm_comment_eq_134848&amp_sm_embedComment_eq_134848&amp_sm_embedDo_eq_findComment#comment-134848_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tSo_co_ my turn to bring my two cents.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ it_t_s just an experiment for now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy idea is this one _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImagine you have either a huge set of geographic data (3D coordinates)_co_ something too big to display at once or even toobig  to build a working mesh with because of the amount of data. Or imagine that you can get infinitely new data_co_ either computed on demand_co_ either downloaded by chunks to depict the new parts of the current terrain in what your camera is currently moving. In both cases_co_ we have too many data to build and display a visible mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo my idea is to decouple the rendering from the logical data. The data could be a very big or dynamically renewed array_co_ whatever... it contains always more info than what is displayable. The terrain is then just an updatable mesh_co_ updated from the camera local position and the current related data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo there is a logical map containing the 3D data (computed_co_ downloaded_co_ or simply very big) and a terrain mesh _qt_sliding_qt_ over the map data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe mesh could be built by taken in account the LOD necessity_co_ it is to say by having many tiny facets close to the camera location and bigger ones far from the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn order to understand_co_ I intentionally computed a random (simplex) map of data that can be displayed here _dd_ it_t_s the red wireframed map_co_ it_t_s 1 million vertices. Normally_co_ it could be far more bigger and wouldn_t_t be displayed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe camera would be moving in the center of the green disc. Actually_co_ the green disc is the displayable terrain and it should move with the camera movements instead of moving independently. The camera should also be submerged in it at a lower altitude. I put the camera far higher and didn_t_t attached the green terrain to it for the sake of understanding _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-03-01T10:24:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ this is what i do under geometry builder algorithm .you can use ( round ) function for keep your point in correct place that make terrain stable too\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreat job !like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T10:35:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\treally nice advice... well_co_ it_t_s just a first attempt_co_ this needs many improvements and refinements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to do it CPU side because I can compute the feature needed for collisions/intersections (normal and terrain altitude at x_co_ z) in the same call at no extra computational cost.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T10:40:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tother example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow the data map is not rendered but is bigger _dd_ 5000 * 5000 coordinate sets (don_t_t try to render it _dd_ this will probably crash your browser)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe terrain mesh is also a bit bigger _dd_ 80 * 80 vertices\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ I really need to check how you did to maintain the stability when moving_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-03-01T10:52:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165502_qt_ data-ipsquote-contentid_eq__qt_28779_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488364840_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tother example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tnow the data map is not rendered but is bigger _dd_ 5000 * 5000 coordinate sets (don_t_t try to render it _dd_ this will probably crash your browser)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tthe terrain mesh is also a bit bigger _dd_ 80 * 80 vertices\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ I really need to check how you did to maintain the stability when moving_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tfor example\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_img alt_eq__qt_sdadsa.png.3e79932dfe1eeb7a765e8c26ed785ec7.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11845_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/sdadsa.png.3e79932dfe1eeb7a765e8c26ed785ec7.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tdo it for all coordinate x and y and z\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfixedPlace _eq_ floor( placex / calibration ) * calibration _sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tplace 1 isnot correct in image _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ sorry\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T11:08:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok thanks_co_ I_t_ll test this this afternoon _dd_-D\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T11:19:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdoesn_t_t fix the issue ... I probably do something wrong somewhere\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-03-01T11:30:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_165514_qt_ data-ipsquote-contentid_eq__qt_28779_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1488367163_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#3_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tdoesn_t_t fix the issue ... I probably do something wrong somewhere\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\there is afternoon so i can check it _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-03-01T11:41:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou don_t_t use normal seprated (vertex ) object \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tplan2 ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#7_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T15:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI couldn_t_t check it this afternoon_co_ too busy ... sorry\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-01T19:27:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tactually_co_ it seems there is still a little bug in my getHeightFromMap() function _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need to fix this first ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T10:08:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__t_s suggestions_co_ here_t_s a better prototype _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething a bit similar in Free Camera mode _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill plenty of bugs_co_ but working better than yesterday _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T12:42:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ now I understand why the terrain is unstable _dd_ as the terrain is computed from the data map_co_ I mean really computed _dd_ its vertex coordinates are interpolated from the map current data and current terrain position_co_ the result of this computation leads to different terrain facet positions each frame. There_t_s statically no chance that all the tiny terrains facets exactly match all the logical data _qt_ones_qt_ (logical facet) each frame. So the hill edges_co_ submits_co_ etc_co_ seem to wave sometimes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ the only way to solve this seems to NOT compute interpolated values and to get only the real current data to morph the terrain_co__lt_br /_gt_\n\twhat should be actually simpler to implement ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T14:41:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn order to have the terrain mesh exactly match the underlying data map_co_ I had to revert back to a squared ribbon instead of a circular one. Thus_co_ for now_co_ there_t_s no more LOD considerations (will be tested later) but just a sliding squared mesh above a logical map (displayed in this example) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can elevate high in altitude to understand how the squared terrain fits the data map _dd_ I need to jump from a data map facet to the next one at some moments. The challenge is trigger this ugly jump whereas the terrain smoothly moves with the cam.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis method solves the terrain hill altitude computation issue _dd_ it_t_s no no longer computed (so no more facet approximation leading to waving edges) but the discrete map data values are directly used instead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] _dd_ the same without the logical data map _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT2] _dd_ same in Free Camera mode walking on the hills _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T15:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlying with the camera _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsame with a bigger terrain (but no LOD so 240 * 240 vertices) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T15:49:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaybe this one is a bit better jitter-wise _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#8_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T20:19:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tlike this mountains (no algo improvement_co_ just another landscape) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#10_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-02T21:02:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tjitter issue probably solved _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MVDH%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MVDH#11_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-03-03T07:06:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_  _dd_ fascinating to watch one mesh crawl over another in the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZASV%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZASV#8_lt_/a_gt_ demo with lines 169 and 170 un-commented\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore hypnotic stuff from you _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-03T08:07:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthanks _dd_-)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-03T17:22:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfirst LOD working attempt _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AYPQV%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AYPQV#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstill one single mesh_co_ just updated_co_ no added/removed vertices\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-04T05:10:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfixed _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AYPQV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AYPQV#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tunless I_t_m still wrong now the terrain is dynamic and infinite  ... well until the position float limit is reached\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ I know_co_ there are the words _qt_inifinite_qt__co_ _qt_until_qt_ and _qt_reached_qt_ in the same sentence... weird.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-04T11:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfirst non-working attempt with a textured terrain _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AYPQV%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AYPQV#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose that the texture seems to slide along the hills because the current uvs aren_t_t linked to the map_co_ but just offset ones from the terrain material.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-06T13:44:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tlet_t_s go on\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst clean refactored PG _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1IHUV1%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1IHUV1#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimple working LOD (no uvs_co_ nor color for now) but more readable code_co_ quite ready to be typescripted if needed _sm_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-06T17:08:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is looking really great. It is a must have for the framework _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]