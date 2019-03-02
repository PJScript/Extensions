[{"Owner":"inteja","Date":"2018-07-06T07:22:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m a bit lost and confused about PlayAnimationAction. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FSIXRA_qt_ rel_eq__qt_external nofollow_qt__gt_Here_t_s a PG_lt_/a_gt_. Click on the cube to play animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere doesn_t_t seem to be a way to target _lt_strong_gt_only one_lt_/strong_gt_ of the defined animations - it always plays both. I would have expected there_t_d be a way to specify which animations (by name) should be played when this action is triggered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I missing a trick here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-06T09:34:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI see now that I can use different key frame ranges for each animation and target them individually that way (see _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FSIXRA%231_qt_ rel_eq__qt_external nofollow_qt__gt_updated PG_lt_/a_gt_). Still seems a bit counterintuitive though when animations have names and those could be used with greater clarity. But maybe I_t_m still missing something and there_t_s a better alternative approach to achieving this result?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T15:00:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe PlayAnimationAction is designed to play all animations of a target and as you mentioned you can then defined from and to keys to pick a specific part of the timeline\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case I would recommend using ExecuteCodeAction directly_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FSIXRA#3_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FSIXRA#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-06T20:37:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  That_t_s exactly what I was looking for.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]