[{"Owner":"sparkbuzz","Date":"2015-07-10T20:21:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve managed to turn off inertia on the ArcRotateCamera by setting it up as follows_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var camera_dd_BABYLON.ArcRotateCamera _eq_ new BABYLON.ArcRotateCamera(    _t_main_camera_t__co_ Math.PI / 4_co_ Math.PI * 0.3_co_ 20_co_ BABYLON.Vector3.Zero()_co_ this.scene)_sm_camera.attachControl(canvas_co_ true)_sm_camera.inertia _eq_ 0_sm_camera.angularSensibility _eq_ 250_sm__lt_/pre_gt__lt_p_gt_but I can_t_t seem to turn off inertia for zooming. Is there a way to turn off inertia entirely for zooming?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-07-11T05:57:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It seems to work for zooming too_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29QAGG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#29QAGG_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the source code_co_ the zoom inertia is the  camera inertia_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L403_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L403_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sparkbuzz","Date":"2015-07-11T08:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You know what_co_ you_t_re right_co_ I_t_m being foolish. I_t_m using a magic mouse and what I thought to be inertia was actually to do with the Mac MagicMouse that keeps scrolling with inertia if you flick your finger over the mouse. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]