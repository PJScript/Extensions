[{"Owner":"Wingnut","Date":"2015-03-04T17:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnod_co_ thx dk.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put some fire proc-texture on the fake volume cones...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2IGNZ2_qt_ rel_eq__qt_external nofollow_qt__gt_take a look_lt_/a_gt_ as wanted_co_ gang.  It_t_s interesting. (maybe)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  The stage lights show that the tavern is rather smokey tonight.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt appears... that maybe... fireTexture.shift is not working.  Early indicators tell me that something is wrong there_co_ but the wrongness sure could be me.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  I didn_t_t have any success with adjusting it.  Experiment at will.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI SO wanted a silhouette of _lt_a href_eq__qt_http_dd_//blogs.iadb.org/sectorprivado/files/E-42.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_E.T. and boy/bicycle_lt_/a_gt_... flying past the spotlight _qt_moons_qt__co_ but I couldn_t_t find the proper animation.  So_co_ we have to settle for a little car.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhy 4 different fire textures_co_ you ask?  I was hoping for no smoke/haze pattern-repeating... light-to-light.  But_co_ the patterns still look similar_co_ especially light 1 and 2.  Their _qt_smoke_qt_ seems nearly identical.  Same seeds_co_ I suppose... maybe.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-04T19:49:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ I see the problem with fire shift.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/fire.fragment.fx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Shaders/fire.fragment.fx_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShader wants a float for .shift.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22601_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_22601_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDocumentation says a vector2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I turned-on all my .shift lines (136_co_ 154_co_ 172_co_ 191)_co_ set them _eq_ 0_co_ and _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#2IGNZ2%231_qt_ rel_eq__qt_external nofollow_qt__gt_no change in shifting seen_lt_/a_gt_.  hmm. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I_t_ve been here (with these problems) before and have already reported these situations to our procedural texture guru.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-04T20:20:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great. I find it pretty nice with those fire textures_co_ it starts to be convincing. Love the idea of using procedurals._lt_/p_gt__lt_p_gt_Maybe an other mapping projection could be used to avoid the problem at the bottom._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T14:16:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@vp - _qt_Problem at the bottom_qt_?  The seam in the texture?  *nod*  In the next gen of computers_co_ there will be hardware seam removal code.  yay!  (you wish_co_ wingy).  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOn a different subject_co_ I have started hacking the BJS ParticleSystem for a special project... which I call _qt_star dome_qt_.  I am going to make a system that creates a sky dome and/or scene-sphere... of particles... as basic stars.  (without using a skybox)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParticles work great for this task... because of the unique and highly-efficient way that our particle system uses VBO_t_s.  Did you know that ALL particles in a single particleSystem... are defined in a single VBO?  In other words_co_ all particles are part of a single mesh (in a way).  This method_co_ totally rocks!  It is the ONLY way to do a sky full of particle stars... and not be FPS-heavy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ our _qt_sparkle_qt_ methods will work fine with this system... so we have star twinkle abilities.  Yay!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the act of shutting-off the particle animation updating_co_ and hacking the .startPositionFunction_co_ I came across a strange phenomenon - particles emitting from 8 emitters at once_co_ with a single particleSystem!  WOW!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WQBB3%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WQBB3#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParty on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2015-03-06T01:48:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looks nice Wingnut_co_ but the links do not appear to be working._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-06T01:54:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  Hey look_co_ I got my first _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#J6ZLH%232_qt_ rel_eq__qt_external nofollow_qt__gt_Star Dome_lt_/a_gt_ working!  yay!  (Actually_co_ it_t_s a star _t_sphere_t_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMousewheel back a few km_t_s to see the global picture.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt_  2000 quads_co_ and this SOB is still smokin_t_-fast!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is some odd star-clustering that I_t_d like to eliminate. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTwo stolen functions (lines 46 - 61) do much of the plotting work_co_ and they get called by my custom _lt_em_gt_.startPositionFunction_lt_/em_gt_ in lines 11-16. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgetCart is short for getCartesian_co_ by the way.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll check/verify those links_co_ Stephen_co_ and it_t_s good to hear from you again.  Thanks for all the _qt_likes_qt_ you_t_ve been giving me.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tForum... any ideas for de-clustering the stars (happening in 2 places)... would be MOST appreciated.  They don_t_t appear to be _qt_polar_qt_ clusters.  They appear to be _qt_equatorial_qt_ - along the equator.  Interesting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStephen_co_ I show those links working ok.  Deltakosh always tells me to clear my browser cache and try again_co_ when I get failed PG demos.  What are you getting_co_ Stephen?  Is it going to a default playground scene?  Just plain 404_t_ing?  *scratch scratch*   Be well_co_ gang.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-06T02:07:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wouaaa_co_ that_t_s really nice !_lt_/p_gt__lt_p_gt_Maybe you could use a better particle texture for the stars..._co_ cause this one is mostly... erm... not really a star _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Try something like the one used by DK _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/10/07/understanding-deviceorientation-events-by-creating-a-small-3d-game-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_here _lt_/a_gt_for instance._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-06T03:15:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s one with a better star texture...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#MYY6S_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#MYY6S_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe knew THIS was going to happen.  We just KNEW it.  hehe.  Ahhh... god sparticles.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the godrays is just a little too much_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust the sparticles...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#MYY6S%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#MYY6S#1 _lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow about some drama?  _qt_We_t_re approaching the star_co_ sir.  I suggest braking thrusters._qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#MYY6S%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#MYY6S#2_lt_/a_gt_   _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2015-03-06T04:59:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou and your sparticles. x]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis looks amazing though_co_ disco ball time?!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe links were timing out_co_ turned out to be a DNS lookup issue_co_ fixed it by switching DNS servers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-06T11:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent !!_lt_/p_gt__lt_p_gt_I found it more beautifull when blinking has stopped ! (Maybe with a far lower _qt_blinking speed_qt_ it would be great)_lt_/p_gt__lt_p_gt_It_t_s interesting in many ways_co_ I think we could add this one to particles doc and VolumetricLightScattering doc as new examples._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your drama scene makes me think of a new challenge for you_dd_ the sun (you know_co_ a beautiful giga orange-reddish sphere_co_ emitting light_co_ with sunspots and coronal mass_lt_br_gt_ejections!). That would be a nice and tough challenge_co_ uh..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-06T13:01:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!  Yeah_co_ all the demos so far... are in _lt_em_gt_ridiculous mode_lt_/em_gt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  To make a proper star-sphere_co_ the sparkles need to be tamed_co_ as you suggested.  Occasional twinkles_co_ maybe a shooting star_co_ sometimes_co_ etc.  We_t_re in version 0.1 alpha._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What first gave me the idea... was a lack of scene.clearTexture.  And with textures... seams (blech). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Plus_co_ the background on a BJS scene... is not a mesh_co_ as we all know.  The background color (clearColor) seems to be something at the GL layer_co_ and I don_t_t think much can be done to it (besides color change)_co_ even with a shader.  But_co_ I_t_m speculating_co_ and that_t_s when I_t_m most-often wrong.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The sun might be quite easy.  A sphere_co_ with god-rayed fire texture_co_ and some low godrays.exposure settings.  That should make a convincing sun.  We won_t_t see any _qt_ejections_qt_ dancing above the sphere_t_s surface_co_ but it still should look ok.  It will have a texture seam_co_ though. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Darned seams.  Who does the sewing _t_round here?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_VP_co_ it_t_s about time that YOU tried a playground or two_co_ eh?  I bet you_t_re an fine modeler and coder.  You have shown excellent taste and good horse-logic in your suggestions.  And you notice details quite well.  If you aren_t_t currently doing scenes_co_ I think you should.  I bet you_t_re good at it.  Thanks for the replies_co_ gang.  Party on!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_  Upper Michigan USA is going above freezing this weekend_co_ and next week!  We get to climb-out from under the hay stacks!  yay!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-10T12:18:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A scene.clearTexture (_eq_ clearColor but with an image) may be usefull_co_ particularly for 2D sprites games_co_ but since we_t_re in a HTML page_co_ you can also play directly with the background (of the page or the canvas) via CSS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingnut_co_ yep_co_ maybe I_t_d be able to do some funny PG experiments_co_ but enough time spending at coding at work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _co_ in my spare time I prefer experimenting with other forms of Art (yes_co_ coding is Art! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ alt_eq__qt_B)_qt__gt_)_co_ for instance playing music_co_ or doing _lt_a href_eq__qt_https_dd_//www.youtube.com/playlist?list_eq_PLsFZ3ui6mdJs1pozACGkl52yMIcI59dAo_qt_ rel_eq__qt_external nofollow_qt__gt_this kind of stuff_lt_/a_gt_ (warning! off-topic mode _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ alt_eq__qt__dd_ph34r_dd__qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-10T13:39:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To put a background in Babs_co_ you can do something like this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Background layernew BABYLON.Layer(_qt_background_qt__co__qt_assets/background/sky.jpg_qt__co_ scene_co_ true)_sm__lt_/pre_gt__lt_p_gt_The last parameter should be set to _t_true_t_ if the image is in background._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-10T14:14:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent !! Didn_t_t know that background layer stuff (I_t_ve never had a serious look at layer system yet)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T01:01:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Vousk... wow!  What a fantastic portfolio you have.  Unreal_co_ literally.  You_t_re a friggin_t_ Aardman-grade animator... easily.  Mighty fine cartoonist_co_ too.  And musician?  Phew. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I watched every video... many twice.  Niiiiice.  Damn.  Oh_co_ that stop-action and clay stuff... that takes so so so much patience... I don_t_t see how you do it.  *sigh*  *droooool*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for showing that to me_co_ VP.  Very nice.  Scary nice._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T04:22:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Temechon.... thanks for the information about Layers._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had to try a few_co_ of course.  Here_t_s _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#1XQKP1%239_qt_ rel_eq__qt_external nofollow_qt__gt_a drunken panorama-like thing_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There seems to be a limit to the width of a panorama image... for layer backgrounds.  Many CORS-cleared panoramas... failed.  Maybe too much image width.  When I used a not-so-wide panorama image_co_ it all worked nicely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In a similar demo_co_ I tried using a non-panorama (stars) layer-texture as a godrays radiator texture... but that didn_t_t work. I might have something wrong.  It_t_s a demented idea_co_ anyway.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Feel free to experiment with that. All the tools are in this demo. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And yes_co_ you do indeed see a _lt_em_gt_layer.texture.uOffset _eq_ camera.alpha_sm__lt_/em_gt_ in the animation loop. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Magic like that... is why I get the BIG BUCKS.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (Wingy hocks-up a loogie and tries to spit like a real man_co_ but it lands in his beard and grosses-out everyone.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-11T10:25:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_74929_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2571_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1426035698_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Vousk... wow!  What a fantastic portfolio you have.  Unreal_co_ literally.  You_t_re a friggin_t_ Aardman-grade animator... easily.  Mighty fine cartoonist_co_ too.  And musician?  Phew. _lt_/p_gt__lt_p_gt_I watched every video... many twice.  Niiiiice.  Damn.  Oh_co_ that stop-action and clay stuff... that takes so so so much patience... I don_t_t see how you do it.  *sigh*  *droooool*_lt_/p_gt__lt_p_gt_Thanks for showing that to me_co_ VP.  Very nice.  Scary nice._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Many many thanks Wingnut!!!!!_lt_/p_gt__lt_p_gt_Glad and happy you like it! I_t_m doing those stuff to make people having good time watching them_co_ so if you enjoyed them I_t_m fully pleased._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Aardman-grade_co_ hmm ? If only... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I_t_d like to be such a talented animator but I_t_m far from those guys. But well_co_ maybe one day_co_ who knows_co_ working in that kind of studio is one of my dreams anyway _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ it requires patience. But I_t_m approximately 3 to 7 fps_co_ not 25 as real animation studios. In fact the longest part is not the animation one_co_ it_t_s all the preliminary setups and all the following video and sound editings. To animate things my trick is simply to mentaly take the character_t_s place and slowing down my own inner time speed_co_ then I live the scene inside myself and move the character at the same time_co_ move a little_co_ -shoot-_co_ move_co_ -shoot-_co_ move_co_ -shoot-_co_ etc... hundreds and hundreds of times. That_t_s so coooool!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_ _dd_lol_dd__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-11T10:29:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Fantastic work Vousk-Prod !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-11T10:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@jerome_dd_ Thank you !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-13T16:43:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi kids!   There_t_s a rumor that _lt_a href_eq__qt_https_dd_//www.kernel.org/pub/linux/kernel/people/geoff/cell/ps3-linux-docs/CellProgrammingTutorial/BasicsOfSIMDProgramming.html_qt_ rel_eq__qt_external nofollow_qt__gt_SIMD_lt_/a_gt_ is circling the BabylonJS airport and requesting landing clearance.  Interesting... maybe.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-13T22:02:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I cannot comment on that _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-15T14:11:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hi again_co_ gang.  Recently_co_ I scraped-together a single document that contains _lt_u_gt_all forum topics_lt_/u_gt_ as-of March 13_co_ 2015. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use it to help find topics with 0 replies... to see if I can somehow answer them_co_ or at least follow-up on the issue.  Everyone is welcome to help with that_co_ thanks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ the _lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/forum_all_topics/all_topics04.htm_qt_ rel_eq__qt_external nofollow_qt__gt_big fat document is located here_lt_/a_gt__lt_/strong_gt_.  Use it_co_ abuse it_co_ but all in all... party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-15T16:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What a nice idea!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-16T09:25:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_https_dd_//software.intel.com/en-us/articles/simd-javascript-faster-html5-apps_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//software.intel.com/en-us/articles/simd-javascript-faster-html5-apps_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//01.org/node/1495_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//01.org/node/1495_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Math/babylon.math.ts#L3417_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Math/babylon.math.ts#L3417_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(sa race velue !)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any benchmark or with vs without SIMD BJS example avalaible ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-16T11:24:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s just a rumor_co_ J.  I_t_m sure it was some malicious user who put _qt_First support for SIMD.js_qt_ in various places at GitHub.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We must not talk TOO much about this_co_ because it might ruin the grandeur of a SIMD Grand Opening Celebration_co_ should such a thing be planned.  Let_t_s keep our new secret society... Knights of the Single Instruction  ...a true secret.  shhh.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We probably shouldn_t_t bother the implementers_co_ and we should require that all secret society members promise to never drink and drive SIMD at the same time.  It could be a very fast motor which requires advanced javascript racing gear and safety considerations.  heh.  vrrrrooooom!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I heard that a Japanese researcher lost a hand when a SIMD-turbocharger on a webGL playground... exploded halfway down the RUN.  We gotta be careful.  At minimum_co_ we should probably get a roll cage on our playground_co_ and make sure its fire extinguisher is fully charged.  Maybe a kill switch... in case we get tossed from the playground cockpit_co_ or black-out... due to the intense acceleration.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]