[{"Owner":"Baker Xiao","Date":"2017-09-12T09:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe are wondering what_t_s the best way to optimize a scene like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* We have 10 clones of the same mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Each mesh bound to a separate instance of a skeleton so they can be animated separately\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* They all use the same material\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now we are seeing 10 draw calls from this scene. Can we reduce them to 1? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-12T11:46:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHowdy_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince they are animated independently (I assume)_co_ 10 draw calls seem right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf they all move the same (like in this example - _lt_a href_eq__qt_http_dd_//www.babylonjs.com/demos/instancedbones/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/demos/instancedbones/_lt_/a_gt_)_co_ it can be reduced.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Baker Xiao","Date":"2017-09-12T11:53:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_188567_qt_ data-ipsquote-contentid_eq__qt_32878_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1505216770_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 minutes ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHowdy_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSince they are animated independently (I assume)_co_ 10 draw calls seem right.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf they all move the same (like in this example - _lt_a href_eq__qt_http_dd_//www.babylonjs.com/demos/instancedbones/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/demos/instancedbones/_lt_/a_gt_)_co_ it can be reduced.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIs there no way to take advantage of them all using the same material? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-12T11:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWell_co_ you are using the same memory allocation for the material_co_ which does increase performance_co_ but 10 meshes (clones_co_ not instances_co_ even with the same material) will still generate 10 draw calls.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Baker Xiao","Date":"2017-09-12T14:47:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_188573_qt_ data-ipsquote-contentid_eq__qt_32878_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1505217332_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWell_co_ you are using the same memory allocation for the material_co_ which does increase performance_co_ but 10 meshes (clones_co_ not instances_co_ even with the same material) will still generate 10 draw calls.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tah gotcha. thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-12T15:32:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd as they use the same material Babylon.js will cache it for you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]