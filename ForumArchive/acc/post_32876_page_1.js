[{"Owner":"Hersir","Date":"2017-09-12T06:48:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created particle system to add some particles in the game but couldn_t_t find a way to blend particles in (now they just appear immediately and than start to blend and move). Is there any why to to it that I have missed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ? As I checked code_co_ looks like there is no direct way  to do it as all methods are privet and colour is set on birth. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-09-12T11:56:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt will be easier to help with a sample code you use on the PG\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-12T13:09:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  I_t_ll take care of the testing playground... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PQT7P%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PQT7P#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGenerally speaking_co_ there are 3 easily-customizable funcs in a standard BJS particleSystem.  1.  particle starting position_co_  2. particle starting direction_co_ and 3. particle mid-flight update.  You can see all 3 of MY custom funcs in lines 18-58_co_ and a little helper func in lines 60-66.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the above playground_co_ lines 91-93 _qt_install_qt_ all three custom functions.  The 3 funcs have been modified in the #9 playground_co_ but the _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PQT7P%231_qt_ rel_eq__qt_external nofollow_qt__gt_#1 playground_lt_/a_gt_ shows all three funcs in their _qt_default_qt_ state.  In other words_co_ in the #1 playground_co_ my custom funcs are exact copies of the normal/default framework funcs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParticle colors are Color4_co_ meaning that the .alpha is the 4th parameter.  SO_co_ my idea... was to start all particles at color4(value_co_ value_co_ value_co_ 0)... and then... as the particle.age increased (as the particle gets older)... slowly increase the 4th parameter... the .alpha.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ that didn_t_t work... probably a Wingnut mistake or maybe an issue with the way particle transparency/depth-rendering is done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat DID work... was starting all the particles with NO COLOR (see lines 124-126)_co_ and then slowly add color... as the particle.age increased.  Particle min/max lifetimes (lines 108/109) determine the allowed particle.age range.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeeping in mind that _lt_em_gt_my_updateFunction_lt_/em_gt_ runs continuously_co_ look at lines 52-55.  Easy to see what_t_s happening_co_ there.  If particle.age &gt_sm_ 2_co_ then add a little color to this particle every time this particle is updated.  This is the reason why the particles are invisible when they first fall from the ebar emitter.  After falling for a while_co_ they get colored (fade-in).  Change the _t_2_t_ in line 52... to a _t_1_t__co_ and the particles will fade-in earlier... closer to the emit bar.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI currently have the particleSystem.direction1 and 2 set to straight down (lines 128-129)_co_ and the emitbox (lines 130-131) is set to emit over the entire length of the 10-length ebar (notice the +5 and -5 in there).  The .1 settings there... are set for another project_co_ so they might need adjusting.  Not important_co_ here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEmitbox settings are actually _qt_position upon the emitter_qt_.  They can be set SO STRANGELY... that the emission area is not even upon the emitter anymore.  [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PQT7P%2310_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_].  Also keep in mind that a particleSystem.emitter can be JUST a Vector3 in space_co_ and need not be a mesh at all.  Super versatile.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ this should get you started.  There may be better ways.  Perhaps somebody can teach us WHY we can_t_t simply increase the particle.color.a inside the updater func.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ a particle system_t_s (custom) updateFunction... is a very powerful and handy way... to make particles do exactly what you want them to do.  Remember that the update function runs very fast_co_ and you want to avoid things that take a LONG time.  That line 39 FOR-loop... iterates thru every spawned particle... so it needs to remain FAST FAST FAST.  No smoke breaks_co_ lunch breaks_co_ coffee breaks_co_ or napping... while inside that for-loop.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_   Hope this helps.  Stay tuned for other/smarter comments.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-09-13T08:50:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ yes color was first I tried _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Problem with custom update function is that all props in it are private_co_ so you cant use them in TS\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-09-14T16:00:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_188664_qt_ data-ipsquote-contentid_eq__qt_32876_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1505292649_qt_ data-ipsquote-userid_eq__qt_26231_qt_ data-ipsquote-username_eq__qt_Hersir_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 9/12/2017 at 10_dd_50 PM_co_ Hersir said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ yes color was first I tried _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Problem with custom update function is that all props in it are private_co_ so you cant use them in TS\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThats no problem... Take a look at my new class I am making for the toolkit to give Shrunken Style Particle System With Update Over Time Features...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust Re-Expose those properties you need in client code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public getParticles()_dd_ Array&lt_sm_Particle&gt_sm_ {\n    return (&lt_sm_any&gt_sm_this).particles_sm_\n}\n\npublic get stockParticles()_dd_ Array&lt_sm_Particle&gt_sm_ {\n    return (&lt_sm_any&gt_sm_this)._stockParticles_sm_\n}\n\npublic get scaledUpdateSpeed()_dd_ number {\n    return (&lt_sm_any&gt_sm_this)._scaledUpdateSpeed_sm_\n}\n\npublic get scaledDirection()_dd_ Vector3 {\n    return (&lt_sm_any&gt_sm_this)._scaledDirection_sm_\n}\n\npublic get scaledColorStep()_dd_ Color4 {\n    return (&lt_sm_any&gt_sm_this)._scaledColorStep_sm_\n}\n\npublic get scaledGravity()_dd_ Vector3 {\n    return (&lt_sm_any&gt_sm_this)._scaledGravity_sm_\n}\n\npublic recycleParticle(particle_dd_ Particle)_dd_ void {\n    if (this._updateModules !_eq_ null) {\n        // TODO_dd_ With Shuriken Module Support\n    }\n    super.recycleParticle(particle)_sm_\n}\n\n/* Shuriken Particle System Default Update Over Time Functions */\n\npublic defaultStartDirectionFunctionHandler(emitPower_dd_ number_co_ worldMatrix_dd_ BABYLON.Matrix_co_ directionToUpdate_dd_ BABYLON.Vector3_co_ particle_dd_ BABYLON.Particle)_dd_ void {\n    if (this._updateModules !_eq_ null) {\n        // TODO_dd_ With Shuriken Module Support\n    }\n    var randX _eq_ BABYLON.Scalar.RandomRange(this.direction1.x_co_ this.direction2.x)_sm_\n    var randY _eq_ BABYLON.Scalar.RandomRange(this.direction1.y_co_ this.direction2.y)_sm_\n    var randZ _eq_ BABYLON.Scalar.RandomRange(this.direction1.z_co_ this.direction2.z)_sm_\n    Vector3.TransformNormalFromFloatsToRef(randX * emitPower_co_ randY * emitPower_co_ randZ * emitPower_co_ worldMatrix_co_ directionToUpdate)_sm_\n}\n\npublic defaultStartPositionFunctionHandler(worldMatrix_dd_ BABYLON.Matrix_co_ positionToUpdate_dd_ BABYLON.Vector3_co_ particle_dd_ BABYLON.Particle)_dd_ void {\n    if (this._updateModules !_eq_ null) {\n        // TODO_dd_ With Shuriken Module Support\n    }\n    var randX _eq_ BABYLON.Scalar.RandomRange(this.minEmitBox.x_co_ this.maxEmitBox.x)_sm_\n    var randY _eq_ BABYLON.Scalar.RandomRange(this.minEmitBox.y_co_ this.maxEmitBox.y)_sm_\n    var randZ _eq_ BABYLON.Scalar.RandomRange(this.minEmitBox.z_co_ this.maxEmitBox.z)_sm_\n    Vector3.TransformCoordinatesFromFloatsToRef(randX_co_ randY_co_ randZ_co_ worldMatrix_co_ positionToUpdate)_sm_\n}\n\npublic defaultUpdateOverTimeFunctionHandler(particles_dd_ BABYLON.Particle[])_dd_ void {\n    if (this._updateModules !_eq_ null) {\n        // TODO_dd_ With Shuriken Module Support\n    }\n    for (var index _eq_ 0_sm_ index &lt_sm_ particles.length_sm_ index++) {\n        var particle _eq_ particles[index]_sm_\n        particle.age +_eq_ this.scaledUpdateSpeed_sm_\n\n        if (particle.age &gt_sm__eq_ particle.lifeTime) { // Recycle by swapping with last particle\n            this.recycleParticle(particle)_sm_\n            index--_sm_\n            continue_sm_\n        }\n        else {\n            particle.colorStep.scaleToRef(this.scaledUpdateSpeed_co_ this.scaledColorStep)_sm_\n            particle.color.addInPlace(this.scaledColorStep)_sm_\n\n            if (particle.color.a &lt_sm_ 0)\n                particle.color.a _eq_ 0_sm_\n\n            particle.angle +_eq_ particle.angularSpeed * this.scaledUpdateSpeed_sm_\n\n            particle.direction.scaleToRef(this.scaledUpdateSpeed_co_ this.scaledDirection)_sm_\n            particle.position.addInPlace(this.scaledDirection)_sm_\n\n            this.gravity.scaleToRef(this.scaledUpdateSpeed_co_ this.scaledGravity)_sm_\n            particle.direction.addInPlace(this.scaledGravity)_sm_\n        }\n    }\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is Whole class so far.... Still working on the Update Over Time features_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was going to ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ on some specifics I need to know about how I plan to implement the update over time features \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut  here is what I got so far ... as far as a customized Particle system...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will go over my Whole Universal Particle System feature in toolkit... As well as a Particle Generator that takes An existing Unity Shuriken particle system... In game scene for directly from prefab... And Parse all the particles off the Unity Shuriken particle System component rich onto the BabylonJS Universal Particle System (which use the new babylon.shurikenParticleSyste.ts) listed below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_14842_qt_ data-fileid_eq__qt_14842_qt_ rel_eq__qt__qt__gt_babylon.shurikenParticleSystem.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-09-15T05:37:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ Thx I will take a look\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]