[{"Owner":"Wingnut","Date":"2018-06-27T13:37:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gang! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#108TWV%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#108TWV#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m looking-for a way to _lt_u_gt_keep_lt_/u_gt_ that GUI-textured_co_ green-rectangled_co_ camera-parented plane... the exact same size as the render canvas_co_ no matter what.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe plane_t_s GUI white border... should extend-to all edges of the canvas... in PG full-screen_co_ with/without F12 dev tools open_co_ and no matter the playground_t_s vertical divider position.  Simply put_co_ the plane needs to scale... to match the render canvas size... perfectly_co_ in ANY SITUATION.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPossible?  You can see assorted test code on-board.  The plane is currently parented 3.15 Z world-units from camera lens.  The green-background GUI rectangle is down-scaled 75%.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWHY do I want this_co_ you ask?  I want to do a SEAMLESS transition from a FULL-screen AdvancedDynamicTexture (ADT)... to a texture-based ADT (on a plane)_co_ and back again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWHY do I want to do THAT_co_ you ask?  Not sure_co_ yet.  Perhaps_co_ just to see if it can be done.  But I suspect it all begins-with a plane that always_co_ perfectly_co_ matches the size of the render canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr maybe MORE accurately-said... the green plane must match the dimensions of the camera frustum... at +3.15 z-units from the camera. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll assistance and ideas... highly-welcomed and appreciated.  (recently updated PG link... now #7 PG_co_ no major diffs)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_PS_lt_/strong_gt__dd_  Use _lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#KX33X8%2335_qt_ rel_eq__qt_external nofollow_qt__gt_this PG_lt_/a_gt__lt_/strong_gt_ to see how a _lt_u_gt_full-screen ADT_lt_/u_gt_ _qt_acts_qt_... when tortured by the 3 test conditions_dd_  _lt_br /_gt_\n\t    - F12 dev tools open/closed_lt_br /_gt_\n\t    - PG settings --&gt_sm_ fullscreen_lt_br /_gt_\n\t    - Re-position of playground_t_s vertical divider\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTiz perfect_co_ through all 3 tests.  Can a texture-based ADT... do the same?  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T15:19:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIve done this a bunch in the past.  1 second._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8Z9TI6#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tIts the same method I use in my raymarching scenes._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZUMAGX%2328_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZUMAGX#28_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tezpz ^_^. do you need it to stay attached when the camera moves?_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8Z9TI6#2_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tFor resizes_co_ you can shift this to make the plane initially at a 1 by 1 unit then scale it to the w/h values.  then add a listener for resizes recalc the w/h and scale the plane accordingly. _lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8Z9TI6#3_lt_/a_gt__lt_br /_gt_\n\tYou will need a better listener_co_ but here you go.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T16:20:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ thx for the reply.  None of those playground pass the three tests.  #3 is close_co_ but it doesn_t_t pass the playground editor/canvas divider drag.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you use the _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#108TWV%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#108TWV#7_lt_/a_gt_ pg as a starter_co_ then I can more-easily see the white border.  (ensure no plane over-flow)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour call_co_ though.  Thx for tests/interest.  There_t_s good code there... thx.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T16:28:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s why I said you need a better listener...  Not gonna do all the work for you. _lt_span class_eq__qt_ipsEmoji_qt__gt_❤️_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThe Math is correct though_co_ there is no overflow I can promise that._lt_br /_gt_\n\twith this method though_co_ you will need to make sure an engine resize if fired before you can use the c.fov parameter. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T16:52:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWellllll  pffft... all of a half of a sudden_co_ my personal slave wants civil rights!  heh.  Of all the audacity!  _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ ok.  You mean like... _lt_strong_gt_canvas_lt_/strong_gt_.addEventListener(_qt_resize_qt__co_ function () {  blah blah? }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNah_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%234_qt_ rel_eq__qt_external nofollow_qt__gt_that sucks_lt_/a_gt__co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need a new event itself.  OnSomeoneDraggedThePlaygroundDividerObservable.add...  um... errr.  *scratch scratch*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso need... OnSomeoneToggledTheirHistoryOrBookmarksSidebar.  Might be same observer... but luck says no.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wish I knew how to code.... or think... or accomplish basic personal hygiene.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_ Let_t_s see... google search_co_ adding custom browser events...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:02:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think there is a listener for the editor that we need to bind a callback to.  hang on 1 second let me see if I can dig that up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:05:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx_co_ I_t_ll _lt_strong_gt_let ya_lt_/strong_gt_ do whatever you like_co_ I have no leashes or timepieces.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I recently completed a bus conversion... made an address bus into a hippy bus.  I_t_m just chillin_t_ in its air-conditioned comfort_co_ sittin_t_ in a rest area by the MMU. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_(nah_co_ there_t_s no bus - but it_t_s an ALMOST FUNNY play-on-words_co_ eh?  No?  fine.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8Z9TI6#5_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tPictures of the bus or it did not happen ^_^.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:21:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCOOOOOOL!  Ya did it!!!  Thx p8!  Well done.  Scary code... but I_t_ll learn what ya did.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:28:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8Z9TI6%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8Z9TI6#9_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tHere is the scary part... adding a advance texture breaks it no matter what I do._lt_br /_gt_\n\t_lt_br /_gt_\n\tAnd that is odddddddddd..............\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:33:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI beg to differ.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#108TWV%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#108TWV#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSMOKIN_t_  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Workin_t_ great_co_ so far._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I removed the ()_eq_&gt_sm_ stuff... cuz my IE hates it._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:37:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_ c is null     calcSceneFrustrum@https_dd_//d33wubrfk_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get that.... after whacking my f12 key a few times.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo... maybe... in the middle of an engine.resize... scene.activeCamera... goes stupid for a moment.  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:39:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI bet i had a listener double binding or something~!_lt_br /_gt_\n\t_lt_br /_gt_\n\tgood job bud!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUh oh_co_ I get that error on divider drags_co_ too.  Vertical (above devtools area) and horizontal (editor/canvas divider).  darn.  I could wrap in try/catch and ignore it... cuz the thing works.  But_co_ what will acadamia think of me?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:47:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts listeners double binding and breaking scope._lt_br /_gt_\n\t_lt_br /_gt_\n\tHard reload the page.  Ill look for a fix.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T17:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\trect.width _eq_ canvas.width_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\trect.height _eq_ canvas.height_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tim not really sure if thats what your asking for but just add a resize function too and it should work perfectly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t???\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T17:56:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo. Coordinate spaces are different.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T17:57:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe_t_re trying to resize the plane itself.  But that_t_s a nice clean solve_co_ DD! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould use a BIG plane_co_ then_co_ much bigger than camera... and then always resize the rect to the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ what happens when i flop this plane onto a physics-active terrain.  The plane will be bigger than the rect... and look goofy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*  That_t_s sort-of why we_t_re shooting-for sizing the plane_co_ not the rect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to make a full-screen ADT... tip-over_co_ or fly away_co_ or move off to the side_co_ and make room for another full-screen ADT.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (a quick convert from a full-screen ADT_co_ to a texture-based... and reversed_co_ too)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T18:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#108TWV%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#108TWV#12_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tCrap fix..._lt_br /_gt_\n\t_lt_br /_gt_\n\tIdeally on most developments your listeners will reset when you make changes to your page because you would refresh... this is the lazy workaround on a PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T18:05:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219738_qt_ data-ipsquote-contentid_eq__qt_38501_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530122221_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWe_t_re trying to resize the plane itself.  But that_t_s a nice clean solve_co_ DD! \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCould use a BIG plane_co_ then_co_ much bigger than camera... and then always resize the rect to the canvas.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut_co_ what happens when i flop this plane onto a physics-active terrain.  The plane will be bigger than the rect... and look goofy.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t*shrug*  That_t_s sort-of why we_t_re shooting-for sizing the plane_co_ not the rect.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\toh yea I see that now... Then I_t_m just gonna throw ideas out that probably won_t_t work_co_ but why not shoot a ray for the four corners of the plane if no collision increase size_co_ or better yet find the z plane of the four rays set that to the z coordinate of the plane_co_ then find the difference between their x/y values do some math and set that as you plane size.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I don_t_t know how ray casts work _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_/span_gt_I_t_m thinking like 4 lasers that go just out of sight of the four corners of the camera and then you use those and the z coordinate of the plane to calculate the width and height the plane need to be_co_ or like do a collision thing with them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this could be solved with some maths.  interesting problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T18:06:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts already solved with math..._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ c _eq_ scene.activeCamera_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ fov _eq_ c.fov_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ aspectRatio _eq_ scene._engine.getAspectRatio(c)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ d _eq_ c.position.length()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ h _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ * d * Math.tan(fov / _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ w _eq_ h * aspectRatio_sm__lt_br /_gt_\n\t\t_lt_br /_gt_\n\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ provided this to me last year_lt_br /_gt_\n\t\t_lt_br /_gt_\n\t\ta quote from him_dd__lt_br /_gt_\n\t\t_qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm_color_dd_rgb(53_co_60_co_65)_sm__qt__gt_Actually this computation is just the same than the one used by the projection matrix when using a perspective camera _dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Math/babylon.math.ts#L5269_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Math/babylon.math.ts#L5269_lt_/a_gt_\n\n\t\t_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\tThis is the way distant things are rendered tinier than closer ones on the screen._qt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T18:11:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219741_qt_ data-ipsquote-contentid_eq__qt_38501_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530122787_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIts already solved with math..._lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ c _eq_ scene.activeCamera_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ fov _eq_ c.fov_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ aspectRatio _eq_ scene._engine.getAspectRatio(c)_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ d _eq_ c.position.length()_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ h _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ * d * Math.tan(fov / _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ w _eq_ h * aspectRatio_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\thmmm_co_ looks like my work here is done _lt_span class_eq__qt_ipsEmoji_qt__gt_😎_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tno haha I_t_m gonna go and think about what I_t_ve done(skipped to the end of the thread and offer suggestions without reading the thread)._lt_span class_eq__qt_ipsEmoji_qt__gt_😪_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T18:11:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe.  You guys are maniacs.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Working good_co_ now_co_ though... tested with bookmarks sidebar toggles_co_ and history sidebar toggles_co_ and f12 toggles_co_ and divider-drags... I can_t_t seem to get it to flop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood job... thanks for all help/input.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow maybe I can get _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ or other maniacs... to show me the fast way to convert a full-screen to a texture-based.  a _qt_casted clone_qt_.  Changes datatype during the cloning.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMight be just a children copy... or maybe hand-around a host_co_ or root_co_ or layer.  Portable gui... comes with wheels.  _lt_span_gt__dd_)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-06-27T18:28:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_to show me the fast way to convert a full-screen to a texture-based_qt__lt_br /_gt_\n\t_lt_br /_gt_\n\tPostPass_co_ I think you are talking about taking what is rendered on the scene and port it to that ADT correct?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-27T18:55:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI dunno about that.  Just cloning children of a fullscreen adt_co_ onto a texture-based ADT... onto the magic plane you made for me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#108TWV%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#108TWV#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorkin_t_ ok... just toggling between the two types... looking at the differences.  Same ._rootContainer._children for both ADT_t_s. (line 143)  Interesting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCursoring the camera will tell which is which.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I need parent-to-cam_co_ and not billboard_co_ perhaps.  *shrug*  Not overly important right now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]