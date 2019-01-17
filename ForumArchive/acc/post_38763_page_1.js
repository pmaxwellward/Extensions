[{"Owner":"devAxeon","Date":"2018-07-10T10:30:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to move between two cubemaps with an HTC VIVE.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s two interactions avaibles_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tClick with the controller on a plane.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tUse the gaze tracker on this same plane.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tThis two cases works perfectly_co_ but_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tController_t_s ray is blocked by the cube (even with isBlocker _eq_ false).\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tgazeTrackerMesh is not visible on my plane.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tHere is a PG_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/index.html#M9YVIX_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/index.html#M9YVIX_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-10T14:16:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-07-10T17:40:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ take a look at this playground_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/index.html#M9YVIX%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/index.html#M9YVIX#2_lt_/a_gt_ (Is this behavior what you expect?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsetting mesh.isPickable _eq_ false will make the rays not be blocked by the skybox_t_s cube but you wont be able to see through the cube to see the rays hitting the plane_co_ so I made the skybox much larger to avoid this\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe gazeTracker was not visible because the plane rendering group id was different then the gazerMeshes render group id_co_ so I think the plane was being rendered on top of the gazer mesh_co_ removing the setting of group id makes the gazer visible again\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know if these solutions are not what you are looking for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-07-11T09:22:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ that_t_s perfect ^^\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you !!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]