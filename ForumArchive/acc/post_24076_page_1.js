[{"Owner":"Flake","Date":"2016-07-26T04:39:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi friends_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI searched for a while_co_ but because of the fairly common search terms I might have missed the info I_t_m looking for in which case I apologies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_I want to use seperate/different UVs for diffuse and opacity textures in the StandardMaterial. Is this a thing that is possible_co_ or would I have to modify the source?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs always_co_ thanks for using you_t_re precious time to help a pleb like me.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let mesh _eq_ new BABYLON.Mesh(_qt_face_qt__co_ scene)_sm_\nlet vertexData _eq_ new BABYLON.VertexData()_sm_\nmesh.material _eq_ mat_sm_\n//set positions_co_ indices_co_ normals\nvertexData.uvs _eq_ normalTextureUVs_sm_\nvertexData.uvs2 _eq_ alphaTexUVs_sm_\nvertexData.applyToMesh(mesh_co_ 1)_sm_\n\nlet mat _eq_ new BABYLON.StandardMaterial(_t_blup_t__co_ scene)_sm_\nmat.diffuseTexture _eq_ new BABYLON.Texture(_t_./thing.png_t__co_ scene)_sm_\nmat.opacityTexture _eq_ new BABYLON.Texture(_t_./alpha.png_t__co_ scene)_sm_\nmat.uv _eq_ vertexData.uvs2_sm_ // &lt_sm_&lt_sm_&lt_sm_&lt_sm_ This is what I_t_m looking for _dd_)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-26T09:57:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can use opacityTexture.coordinatesIndex _eq_ 1 to make it use the second set of uvs.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Flake","Date":"2016-07-26T23:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSweet! Once again Babylon makes it look easy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_span_gt_@_lt_/span_gt__lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F24076-seperate-uvs-for-diffuse-and-opacity-textures%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ title_eq__qt_Go to Sebavan_t_s profile_qt_ rel_eq__qt__qt__gt_Sebavan_lt_/a_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]