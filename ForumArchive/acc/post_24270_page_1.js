[{"Owner":"trecool","Date":"2016-08-04T09:02:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs a student of UX design I have no real deeper knowledge of 3D development but have got about two-ish years of Unity under my belt. For a project as part of my intership I wanted to develop an application WebGL but as the Unity WebGL export is far from great and takes ages to load the simplest scenes_co_ I made the transition to _qt_real_qt_ WebGL using ThreeJS. I did have great sucess with it but when I dug a little deeper I ran into a few brickwalls I can_t_t seem to find a satisfying answer to - so I hope some of you may shed some light on my problems _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tFrom what I gathered_co_ ThreeJS is great for just displaying and rendering things but severly lacks in the anmiation and simulation department_co_ where BabylonJS enters the room. Does this hold true? \n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tComing from Unity_co_ I don_t_t quite understand the renderloop. A scene is created and then this scene is continously rendered in the renderloop. Correct? So why are not all objects and imported meshes loaded and created every frame but just once? Or is my view on the whole system totally scewed to begin with? Again_co_ I_t_m used to Start() and Update() in Unity _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/li_gt_\n\t_lt_li_gt_\n\t\tand finally_co_ I need to create some simple dynmaic animations in 2D and 3D space. Those animations are quite simple_co_ one is for instance just two sliders controlling values and based on those values_co_ something happens_co_ nothing fancy or highly computing intensive. Basically a _qt_if I push a button then a door opens_qt_ kind of thing. In Unity this is done really fast in an almost drag and drop manner_co_ but I have no experience in creating such scenes by code alone. Is it more _qt_difficult?_qt_ Or is just the transition period a little difficult and once I got a understanding of the mechanics its just smooth sailing? Would you recommend BabylonJS or is it more a _qt_of course you could use it_co_ buuuuut...._qt_?\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tI do hope someone can enlighten me and support my decision to move to Babylon. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-04T15:55:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23058-trecool/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23058_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23058-trecool/_qt_ rel_eq__qt__qt__gt_@trecool_lt_/a_gt__co_ welcome to the BabylonJS forum!  I_t_m no expert_co_ but I_t_ll give my honest opinions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  Actually_co_ ThreeJS does animations almost as well as BabylonJS.   Here is a _lt_a href_eq__qt_https_dd_//stemkoski.github.io/Three.js/Model-Animation-Control.html_qt_ rel_eq__qt_external nofollow_qt__gt_Professor Stemkoski animation demo_lt_/a_gt_.  Just use your cursor keys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.  You are correct_co_ the scene is rendered over and over.  BUT... the scene is not built/assembled over and over.  Besides rendering a scene constantly_co_ many programmers _qt_wedge-into_qt_ the renderloop and use it as an engine to do work.  Take a look at our playground demo for lights _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?6_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?6_lt_/a_gt_.  Look at lines 56-67.  scene.beforeRender is one way to say _qt_run this code just before EACH rendering happens_qt_.  Math sine and cosine values are applied to the X and Z axes of lights_co_ causing them to do dynamic orbiting.  It_t_s as if we hooked a belt or driveshaft to the fast-running render loop_co_ and use that drivebelt to power scene machinery.  The main thing to remember... don_t_t load-down the render loop with slow-running code.  beforeRender code should run fast and get done quick_co_ or else your overall scene render speed will suffer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate is done here_co_ too... but automatically.  Mesh have a Boolean flag on them... update-able or not.  I _lt_em_gt_THINK_lt_/em_gt_... the more mesh that you can set updatable to FALSE_co_ the faster the overall scene will run... but I might be full of crap.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t3.  It_t_s not quite drag_t_n_t_drop with BabylonJS_co_ but it_t_s not terrible_co_ either.  For example_co_ a door mesh needs to be positioned into the door frame... and that can be done within BJS_co_ or within the modeling software (if you use a modeler).  Sometimes_co_ its pivot point needs a move.  That_co_ also_co_ can be done with one line of code in BJS or in the modeler.  Animations... a little more difficult_co_ but still not bad.  In fact_co_ we have a createAndStartAnimation() that requires only one line of code. Generally_co_ set a start frame_co_ set a stop frame_co_ tell it which property you want to animate (door.rotation.y)_co_ and tell it how fast to do it.  Not bad at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s a few things that BJS has_co_ that 3JS doesn_t_t.  One... a great working online _qt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#27ZAG1%231_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt__qt_ with _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground_qt_ rel_eq__qt_external nofollow_qt__gt_playground search_lt_/a_gt_.  Two... much better backward-compatibility.  Three... a very active and helpful forum_co_ with a great _qt_team_qt_ spirit.  Many times_co_ I have seen LARGE NUMBERS of forum helpers... go to work on a user_t_s issue.  Just read-around in the forum a bit... you_t_ll see it_co_ too.  The people here... pride themselves in the speed of helping_co_ and in being thorough.  You don_t_t see grumpy helpers here_co_ even when a helper is answering the same question that has been asked a hundred times.  That is one of MY volunteer tasks around this place.  I watch-for repeatedly-asked questions and problems_co_ and try to adjust our documentation to eliminate that.  Others do that_co_ too.  Although I don_t_t know much about the _qt_give a crap_qt_-factor for other webGL frameworks... the BJS forum give-a-crap factor is WAY WAY high.  Forum helpers here... sometimes go _lt_u_gt_far_lt_/u_gt_ beyond the call of duty_co_ and teach-about/help-with issues NOT about BabylonJS_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd... we_t_re example-crazy_co_ here.  We LOVE to see and hear-about what users are doing with BJS.  This helps core programmers and documentation writers _qt_contour_qt_ the system to accommodate everyone.  Speaking of accommodation_co_ the chief author_co_ and other BJS-core programmers around here... REALLY listen to feature requests_co_ and always try to accommodate the request_co_ when viable.  Not only that_co_ but they add it FAST.  I have made requests for changes... and gotten the change added in under 5 minutes.  Really.  It_t_s rare that features can be added that quickly_co_ but if they CAN be_co_ it_t_s done.  In other words... great people with a high give-a-crap factor.  You_t_re never alone... when you drive BJS.  You have friends_co_ and some of them are geniuses and idea-folk.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the playground_co_ and its searcher_co_ and its ZIP feature.... those are the real _qt_meat_qt_ of BJS.  There are probably 25_co_000 playground demos in the playground database - test scenes and experiments covering every webGL subject known to man_co_ + 3 more.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  This is a really nice learning environment with good friends in all directions_co_ and a real fast framework.  Even if you DO switch frameworks_co_ later... much of what you learned here_co_ will transfer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ this is a SLIGHTLY smaller family than 3JS land... and we like it that way.  Also_co_ BJS doesn_t_t necessarily provide a pile of rarely-used helper objects_co_ but BJS makes it easy for _lt_u_gt_you_lt_/u_gt_ to build your own helper objects... contoured to YOUR project.  The helpers are better when you build them yourself.  They fit your needs_co_ better.  It just takes a little time_co_ a little terminology learning_co_ a little documentation site familiarization_co_ and some great playground demo code... and in no time_co_ you_t_ll be fartin_t_ thru BJS silk.  err... I mean... you will feel REAL comfortable here in BJS land.  Ask anyone here.  They all know... after a very short learning curve... the sun comes out_co_ the ride gets smooth_co_ and the smiles are everywhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ just plant your butt into this nice BJS grass_co_ and relax into our world.  You_t_ll never regret it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T17:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you Wingnut for this great response_co_ this is really to have you on the forum!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-08-04T20:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDamn. I never realized all the cool shit you can find by randomly searching the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found a couple of simpler_co_ yet more performant examples of my own implementations.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-08-05T19:34:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138715_qt_ data-ipsquote-contentid_eq__qt_24270_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470301336_qt_ data-ipsquote-userid_eq__qt_23058_qt_ data-ipsquote-username_eq__qt_trecool_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 4/8/2016 at 11_dd_02 AM_co_ trecool said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_ol_gt__lt_li_gt_\n\t\t\t\tComing from Unity_co_ I don_t_t quite understand the renderloop. A scene is created and then this scene is continously rendered in the renderloop. Correct? So why are not all objects and imported meshes loaded and created every frame but just once? Or is my view on the whole system totally scewed to begin with? Again_co_ I_t_m used to Start() and Update() in Unity _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/li_gt_\n\t\t_lt_/ol_gt__lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf i may add one tiny note to this_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll game frameworks/engines have a sort of renderLoop_co_ wether it is using webGl_co_ DirectX or something else_co_ the rendering is essentially drawing what you can see_co_ so a frame is actually a picture drawn on your screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tevery single on-the-go visible change is possible because of this_co_ so let_t_s say you are controlling a player and moving forward_co_ at a standard 60 FPS_co_ it means that the renderLoop draws you 60 frames each second that passes_co_ each frame a little different and it basicly turns code into visual movements infront of your eyes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-07T16:37:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ yep_co_ yep.  Seeing that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23058-trecool/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23058_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23058-trecool/_qt_ rel_eq__qt__qt__gt_@trecool_lt_/a_gt_ is a Unity pilot... maybe we can talk about Unity for a few moments.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat the heck is that thing?  Modeler + game-logic thing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m quite inexperienced_co_ but I think the Blender _qt_bricks_qt_ thing is also a game-logic contraption.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGame-logic doesn_t_t export so well from ANYTHING_co_ I suspect.  I can understand why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExporters are strange in themselves.  They don_t_t really _qt_belong_qt_ to anything.  We have a custodian... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_... helps us with our Blender exporter while he develops his own semi-related product (it seems).  I think he helps us out of pure kindness.  We get a great Blender exporter... as a side-effect of his Tower of Babel project.  At least that_t_s what it seems.  JC has honored MANY feature requests for the Blender exporter... but it is not really _qt_his baby_qt_.  It belongs to _lt_u_gt_all of us_lt_/u_gt_ (again_co_ thanks to his kindness)... and exporters... are a bit of a maintenance hassle (imho).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn general_co_ we don_t_t have _qt_teams_qt_ to keep exporters _qt_fresh_qt_ and juggle the versioning problems_co_ as modelers evolve.  (modelers being 3DMax_co_ Blender_co_ Unity_co_ Maya_co_ Cinema4D_co_ etc).  All those wares... are still evolving_co_ and can cause exporters to need constant attention.  I think... keeping exporters fresh and working with _qt_the latest xxx_qt_... is a substantial task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then there_t_s this other _qt_pondering_qt_.  Whose _qt_job_qt_ is it to provide the exporters?  Should Blender people build the BJS exporter?  Should BJS people?  Is it _qt_part of the framework_qt_ or not.  Does it belong as part of the framework_co_ or not?  Who has way too much time on their hands and has a subscription to always have the newest 3DMax?  Who can afford to do that_co_ AND knows how to code Max exporters? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNobody_co_ that_t_s who.  Exporters seem to live in _qt_no man_t_s land_qt__co_ don_t_t they?  They seem to be some of the most un-loved code_co_ ever.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYet Blender folks visit and ask _qt_Can BabylonJS do cycles rendering or shapeKeys or [insert new Blender feature here] ... exported from Blender?_qt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPoor JC is probably a frazzled mess... losing more sanity with each new Blender feature that he has to honor_co_ or avoid_co_ or listen to forum questions-about.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Let_t_s hope that_t_s not the case.  JC is a local hero_co_ for sure.  If he were a dog_co_ I_t_d scratch his belly for a while.  He_t_s a good dog.  Someday_co_ I want to diagram what he does for TOB and exporting_co_ and learn it.  And I wouldn_t_t mind knowing the story of Tower of Babel. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you building a _qt_universal exporter_qt__co_ JC?  Can we read about it_t_s far-reaching purpose_co_ somewhere?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ there seems to be plenty to think-about... with exporters.  In a way_co_ exporters are _qt_glue code_qt__co_ aren_t_t they?  They hook one thing to another... and the people like JC who do the miserable job of running the glue machine... are truly a different breed.  I admire their tenacity. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tComments welcome.  Let_t_s contaminate Trecool_t_s thread.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Maybe he_t_ll tell us about Unity... and what he thinks CAN and CAN_t_T be exported.  Game-logic... might be rough.  Models... maybe okay.  Not sure.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-08-10T14:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ the changing of both Blender &amp_sm_ BJS was part of the reason for switching to a multi-source file / zip media file architecture.  Though the massive single file approach was already _qt_out of gas_qt_ for all the Tower of Babel things not in the JSON exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not building a _qt_universal exporter_qt_.  My original analysis of BJS 2 years ago was the animation sub-system &amp_sm_ and its reliance on external modelers_co_ as you call them_co_ is just not good enough for me.  I am building an extension which is essentially a replacement animation system. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis required that I actually address this before things got to BJS.  FYI_co_ I have even written all but one of the operators in the new _lt_a href_eq__qt_https_dd_//github.com/Palmer-JC/community-plugins/tree/master/blender_source/MH_Community_qt_ rel_eq__qt_external nofollow_qt__gt_MakeHuman community plug-in_lt_/a_gt_ for Blender.  I control of more of my own destiny by stretching out my process pipeline.  Most times when you hear _qt_I made a model in XYZ_co_ imported it to this thing_co_ changed it_co_ bounced it off the Apollo Moon reflector_co_ then ..._qt__co_ basically they are loosing something with every step.  I am actually gaining things!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQI is not a _qt_sub-system_qt__co_ but a OO approach where each sub-class mesh has a dedicated before renderer.  This allows for coordinated POV movement &amp_sm_ rotation_co_ with morphing_co_ and skeletal interpolation.  Making mesh sub-classes requires source code generation.  JSON is not going to cut it.  Specifying the name of a base class in Blender means you can actually code methods and add properties in typescript_co_ and the exported sub-class is automatically just plugged-in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ the gains of actually doing the animation performance in JS are massive.  Not only do you avoid large input files_co_ but with minor scene level work_co_ you can add bits of randomness.  A 10_co_000 word vocabulary comes to mind (thanks Carnegie Mellon / defense dept).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFurther_co_ you submit your animation targets asynchronously to a queue.  Queuing means you do not have to know when things end then start the next at the application level (you can put a function at the end of the submission if you want though).  Want to synchronize the maybe 50 vismes (morphs) for a long sentence?  Good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-10T16:34:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow.  Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_.  When you say QI_co_ you mean... _qt__lt_a href_eq__qt_https_dd_//www.blender.org/manual/render/freestyle/parameter_editor/line_set.html_qt_ rel_eq__qt_external nofollow_qt__gt_Quantitative Invisibility_lt_/a_gt__qt_?  I_t_ll assume yes.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I think I understand SOME of the rest.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  In the exporter_co_ you are generating JS code that is later run locally after the import arrives at BJS.  (_qt_stretching out my process pipeline_qt_).  You do some pre-processing _qt_before things got to BJS_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery nice.  No more .babylon file_co_ but instead_co_ a zip of files attained via the pre-processing in the exporter.  Some of these files contain JS source that is run in BJS after import unpack.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the MakeHuman thing (congrats on your successes_co_ there_co_ btw)... this QI approach can be used to avoid rendering parts of the skeleton that are not in-view_co_ yes?  (I_t_ll assume yes). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving a beforeRender on each subClass/subMesh_co_ is a place to put QI code that checks if the camera POV or skeleton rotation has changed in such a way as to require vertices to be set visible/invisible.  This way_co_ the engine only renders the parts of the skeleton that the camera can see?  (I_t_ll assume yes). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hate to waste your time on my noob questions.  I needed to clarify/reword some of your statements... I hope you don_t_t mind.  thx agn for the info.  Repair my bad thinking_co_ as wanted.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-08-10T18:21:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI meant _qt_Queued Interpolation_qt_ extension.  The module name is QI to keep it short.  In retrospect BABYLON might work better if it were BJS (too late now).\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou are generating JS code that is later run locally after the import arrives at BJS.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo_co_ the JS code file _lt_strong_gt__lt_span style_eq__qt_font-size_dd_20px_sm__qt__gt_is_lt_/span_gt_ _lt_/strong_gt_the import.  There is not actually even an import process (unless you want to attach a JS file on the fly post load).  It is all in the JS file_co_ with all the values for positions / normals / UV / vertex colors / matrix weights &amp_sm_ indexes / shape key groups / indexes as inline code.  Just put the JS file in the HTML header.  When you want an instance of any particular mesh_co_ just say some similar to instancing a ground_dd_ (module by default is the .BLEND file name)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var instance _eq_ new module.MyMeshClass(_t_name_t__co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn Blender_co_ you can specify a base class for a mesh in TOB.  If you do not_co_ the base class will be either BABYLON.Mesh or QI.Mesh is there are shape keys or an armature found.  QI.Mesh inherits from BABYLON.Mesh of course.  It sets up the before renderer / queue(s) for you_co_ as well as has all the functions for submitting things to a queue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is no preprocessing in JS code.  There is however an optional post constructor processing hook.  Lets say you write a typescript mesh class to queue random eye rotations.  You would then set this as the base class of each eye mesh (don_t_t tell anybody_co_ but it is set for you in the separate eyes routine in the MakeHuman Plug-in).  In the computer built constructor_co_ the first thing called is super_t_s constructor_co_ then the inline geometry initialization executes.  You cannot do anything to set things up that rely on the geometry in super.  If there is a method postConstruction() found in super class_co_ then it will be called at the end of the computer built constructor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is enormous preprocessing of Blender shape keys into QI.ShapeKeyGroups though.  In Blender_co_ a shape key covers the entire mesh.  A QI.ShapeKeyGroup is only part of the mesh_co_ so you can have multiple groups for multiple independent morphing. (FACE_co_ WINK_co_ L_HAND_co_ R_HAND_co_ BOOBS_co_ etc).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I said ZIP media file_co_ I meant the python source files.  There is still a .babylon as output for the JSON exporter just released.  A single source file &gt_sm_ 4000 lines is not manageable.  Also a ZIP file can contain files other than python source.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-10T19:04:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks again_co_ JC.  Boy_co_ was I on a wild goose chase of wrongness.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]