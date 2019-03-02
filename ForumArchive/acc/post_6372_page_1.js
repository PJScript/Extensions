[{"Owner":"demonixis","Date":"2014-05-12T12:30:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Since the last update I_t_ve an issue with babylon.js and picking ray._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is my code_dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var ray _eq_ _scene.createPickingRay(event.clientX_co_ event.clientY)_sm__lt_/pre_gt__lt_p_gt_It works as expected on PC but not on mobile. For having this method working I need to remove Hardware Scaling support in viewport object and in createPickingRay method._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So with this hack it_t_s works _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// babylon.scene.jsScene.prototype.createPickingRay _eq_ function (x_co_ y_co_ world_co_ camera) {      // Code      return BABYLON.Ray.CreateNew(x_co_ y_co_ viewport.width_co_ viewport.height_co_ world ? world _dd_ BABYLON.Matrix.Identity()_co_ camera.getViewMatrix()_co_ camera.getProjectionMatrix())_sm_}_sm_//  babylon.math.jsViewport.prototype.toGlobal _eq_ function (engine) {        var width _eq_ engine.getRenderWidth()_sm_        var height _eq_ engine.getRenderHeight()_sm_        return new Viewport(this.x * width_co_ this.y * height_co_ this.width * width_co_ this.height * height)_sm_}_sm__lt_/pre_gt__lt_p_gt_My test has been done on a Nexus 7 (latest chrome and Android) and Nexus 4 (latest chrome and Android). Have you an idea about this issue ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_demonixis._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2014-05-12T12:35:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think a related issue is_co_ on a desktop browser like IE11_co_ if you change the browser scale settings to something other than 100% (using Ctrl+ or Settings/Zoom)_co_ then picking ray fails there as well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So this might be a general issue with scaling and pick ray?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-12T17:52:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not have this issue with ie11 when using let_t_s say 125%_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-12T18:12:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok you_t_re right! It is due to how I compute the width/height right now_lt_/p_gt__lt_p_gt_I_t_ll fix it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]