[{"Owner":"HoloLite","Date":"2018-04-24T17:53:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI noticed that the specular light effects in my app has completely disappeared in rc1. It was working in beta5. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHas anything changed? Is this a bug ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-24T18:06:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNothing should have changed here that I know_co_ I can also still see the specular effects in all the test PG I looked at. Do you have more precision on how you are using it (this might help troubleshooting) ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-04-24T18:40:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am using 2 lights_dd_ hemi and directional. The code fragment is the following.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe this.light is directional light. The this.hemilight is hemispheric light.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_     \n                this.light.intensity _eq_ 2.0_sm_\n                this.light.direction _eq_ new BABYLON.Vector3(0.1_co_ 0.9_co_ 0.1)_sm_\n                this.light.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n                this.light.specular _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm_\n\n                this.hemiLight.intensity _eq_ 1.0_sm_\n                this.hemiLight.direction _eq_ new BABYLON.Vector3(0.1_co_ 0.9_co_ 0.1)_sm_\n                this.setSkyboxSettings(_qt_material.inclination_qt__co_ this.skyboxMaterial.inclination_co_ 0)_sm_ \n                _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis would give the specular lighting effect in the app_co_ until rc1.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-24T18:48:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can still see it on both standard and pbr_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#0GNDZT_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#0GNDZT_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#0GNDZT%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#0GNDZT#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-04-24T18:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for looking into this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy meshes are using materials with diffuse textures. I wonder if some default values have changed recently in beta1.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-24T21:16:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStill seems to work as well. It is really hard to troubleshoot without PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#0GNDZT%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#0GNDZT#2_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#0GNDZT%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#0GNDZT#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-04-24T21:47:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHEHEHE no wonder you cannot reproduce it. You did it with rc2 and apparently it was fixed in rc2. I just updated my app to rc2 and the issue was gone._lt_br /_gt_\n\tThe issue was indeed present in rc1 though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for looking into this anyway!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]