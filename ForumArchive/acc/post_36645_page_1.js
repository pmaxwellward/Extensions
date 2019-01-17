[{"Owner":"mhalle","Date":"2018-03-26T15:35:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m looking for a way to find all the intersections of a ray passing through a scene_dd_ an extension of multi-pick_co_ but capturing multiple face intersections for convex (or non-planar) objects. That means front face_co_ back face_co_ and potentially others.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy?  I_t_d like to simulate a core sample of a scene by collecting front and back faces along a ray_co_ sorting them_co_ and figuring out the inside/outside relationships.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any reasonable way to reuse the Babylon.js picking machinery to do this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-26T17:01:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can probably read the picking code here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L4637_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L4637_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]