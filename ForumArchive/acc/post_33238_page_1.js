[{"Owner":"Mezzorio","Date":"2017-10-04T09:09:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to get a bit of help getting a function working whereby when I hover my mouse over character sprites it will show a there name and title just above the mouse position for each different sprite_co_ I_t_m unsure if I need to look at going down the route of a mouse hover/mouse over function or i need to create an event listener. If anyone could make a demo that I could play with and learn from or something that would be perfect!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMezz \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-04T09:54:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe best events for that would be the OnPointerOverTrigger OnPointerOutTrigger_co_ which can be added as actions to a specific mesh. You can check the Actions demo in the playground to see how it works (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/?17_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/?17_lt_/a_gt_) and read all about the action manager here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_actions_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T09:55:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe actionManagers?  Here_t_s a loop you once had in your project_co_ Mezz.  I made it a bit longer.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for (var i _eq_ 0_sm_ i &lt_sm_numberOfStaff_sm_ i++){\n    spriteManagerstaffs.isPickable _eq_ true_sm_\n    staffs _eq_ new BABYLON.Sprite(_qt_staff_qt__co_ spriteManagerstaffs)_sm_\n    staffs.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n    staffs.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger_co_\n    function (AM_event) {\n        console.log(_qt_Over _qt_ + AM_event.source.name)_sm_\n    }))_sm_\n\n    staffs.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger_co_\n    function (AM_event) {\n        console.log(_qt_Exit _qt_ + AM_event.source.name)_sm_\n    }))_sm_\n} _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHope this helps.  I think both the actionManager and the sprite itself.... need isPickable _eq_ true_sm_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VEGKI1%2310_qt_ rel_eq__qt_external nofollow_qt__gt_Overlapping sprites_lt_/a_gt_ could be trouble.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T09:56:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ Raanan is a _qt_fast draw_qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Gunned me down in the streets... by mere microseconds.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhat_t_s next?  Deciding what type of pop-up text panel to use?  *nod*  For maximum complications_co_ use an absolutely positioned html iframe.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Launch the staffer_t_s entire website in that iframe.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2017-10-04T10:06:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_190836_qt_ data-ipsquote-contentid_eq__qt_33238_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1507110912_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMaybe actionManagers?  Here_t_s a loop you once had in your project_co_ Mezz.  I made it a bit longer.\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_for (var i _eq_ 0_sm_ i &lt_sm_numberOfStaff_sm_ i++){\n    spriteManagerstaffs.isPickable _eq_ true_sm_\n    staffs _eq_ new BABYLON.Sprite(_qt_staff_qt__co_ spriteManagerstaffs)_sm_\n    staffs.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n    staffs.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger_co_\n    function (AM_event) {\n        console.log(_qt_Over _qt_ + AM_event.source.name)_sm_\n    }))_sm_\n\n    staffs.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger_co_\n    function (AM_event) {\n        console.log(_qt_Exit _qt_ + AM_event.source.name)_sm_\n    }))_sm_\n} _lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHope this helps.  I think both the actionManager and the sprite itself.... need isPickable _eq_ true_sm_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VEGKI1%2310_qt_ rel_eq__qt_external nofollow_qt__gt_Overlapping sprites_lt_/a_gt_ could be trouble.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIve got the set as pickable true and have my wierd sprite manager so overlapping sprites is no longer an issue_co_ now i have some things to play with and try to get working! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks to you both!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T10:11:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd to DK for the feature itself...\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1821645932_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20104-need-onpickouttrigger/?do_eq_embed&amp_sm_comment_eq_115708&amp_sm_embedComment_eq_115708&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_258px_sm_max-width_dd_500px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T10:17:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPerhaps _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ or others can help us with a question_co_ while we_t_re here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my previous code-paste_co_ and pretending there are 50 staff...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... Are we storing those pointerOver and pointerOut funcs... MANY times?  Does anyone see how to make this wiser... if there is some bad practices involved here?  Thx for advice.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2017-10-04T10:19:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_190840_qt_ data-ipsquote-contentid_eq__qt_33238_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1507112256_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPerhaps _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ or others can help us with a question_co_ while we_t_re here.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn my previous code-paste_co_ and pretending there are 50 staff...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t... Are we storing those pointerOver and pointerOut funcs... MANY times?  Does anyone see how to make this wiser... if there is some bad practices involved here?  Thx for advice.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIm using 40 Sprites in my build i load them in as an array and use loops to call through the array list and then in my html set data teams for buttons and other features so on click you can pull through any values stored within the array_co_ and only have to load in one function for the mouse pointer over and clickable area_co_ i can send you my build folder if you wanted to see _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T10:25:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt sounds like you have it well under-control... cool.  I sometimes give bad advice_co_ esp when I code-paste.  I must be careful not to spread my stupidity.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2017-10-04T10:27:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_190843_qt_ data-ipsquote-contentid_eq__qt_33238_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1507112727_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt sounds like you have it well under-control... cool.  I sometimes give bad advice_co_ esp when I code-paste.  I must be careful not to spread my stupidity.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI wouldn_t_t say that_co_ I can_t_t work out how to get this working_co_ i don_t_t know what i need to put in the function to get the mouse hover to display the text value of the examples in the function currently if you have any advice?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tspriteManagerstaffs_lt_em_gt_.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger_co__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                function () {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                staffs[staffnum].name_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t                 staffs[staffnum].title_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            }))_sm_\n_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T10:36:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ you sound like you come from an HTML background_co_ where desc or altdesc would display when mouse-over some html elements.  *nod* \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn webGL canvas land... no such luxuries.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne way... the great _qt_sheet of cellophane_qt_ that is BABYLON GUI full-screen mode.  A 2D piece of plastic across the monitor screen_co_ and you can draw on it.  That_t_s one way.  babylon gui textBlocks_co_ possibly inside containers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother way_co_ babylon gui text mapped onto a plane... that you enable and disable at will.  Like another sprite_co_ but for text and crap.  Little icons/pics allowed too.... but no overflow/scrollbars.  Wordwrap _eq_ yes. (my preferred way is this way).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember... Babylon GUI AdvancedDynamicTexture (adt_t_s) can be mapped fullscreen_co_ or onto a mesh.  It is common to use many adt_t_s at the same time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ standard (old style) BJS DynamicTexture on material for a plane... but really_co_ Babylon GUI is already doing that... and with better text handling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPop-open absolute positioned iframe or div... or span.... not out of the question.  Scrollers active_co_ borders nice_co_ good text handling and pads.  *shrug*  Others may have thoughts.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2017-10-04T10:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_a href_eq__qt_https_dd_//drive.google.com/open?id_eq_0B3n3tyoDBL7Cc1E3QmxxZWNXekk_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/open?id_eq_0B3n3tyoDBL7Cc1E3QmxxZWNXekk_lt_/a_gt_ - My build folder hosted in Google Drive\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T10:49:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA modalBox? hmm.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Let_t_s see... that_t_s a pop-open that won_t_t let you un-focus it... until you take an action?  Something like that.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou know... Mezz... I_t_ve been TRYING to make you avoid sprites and instead put your pictures onto planes or boxes.  So_co_ I_t_m biased.  But even now... don_t_t just pop-up a panel of info.  Spinning mesh... fly that puppy-in from stage left... with a WHOOOOOSH and a spray of sparkly particles! YEAH!  Like Tinker Bell just whacked us in the head with her magic faerie wand!  POOOSH - twinklefest! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGet BIG!  It_t_s all about the _qt_hoopla_qt__co_ right?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Now THAT_t_S a pop-open.  heh  (oh_co_ I better get some coffee and a clue_co_ huh?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA slow dissolve-in using something.visibility or somematerial.alpha... is always nice_co_ too.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]