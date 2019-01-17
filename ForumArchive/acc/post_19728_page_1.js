[{"Owner":"Christoph","Date":"2016-01-08T08:53:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_just joined and tried to get the hang out of Babylon.js _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m a bit lost on this problem_dd_ I want to remove the particle emitter from rendering_co_ so only particles are rendered_co_ but no emitter at all..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2016-01-08T12:37:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_/pre_gt__lt_p_gt_\nemitter.isVisible _eq_ false_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Christoph","Date":"2016-01-08T13:29:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-01-08T19:35:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso note that _lt_em_gt_particleSystem.emitter_lt_/em_gt_ allows a vector3 POSITION (in space)_co_ as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#206JUO%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#206JUO#4_lt_/a_gt_  (see line 18)  Vector3_t_s are invisible from birth.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSUPER handy if you want to make particleSystem.emitter _eq_ someMesh.position.   Easily switchable_co_ mesh-to-mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Christoph","Date":"2016-01-09T09:06:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_111930_qt_ data-ipsquote-contentid_eq__qt_19728_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1452281741_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/8/2016 at 1_dd_35 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_div_gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tAlso note that _lt_em_gt_particleSystem.emitter_lt_/em_gt_ allows a vector3 POSITION (in space)_co_ as well.\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t \n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#206JUO%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#206JUO#4_lt_/a_gt_  (see line 18)  Vector3_t_s are invisible from birth.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t \n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tSUPER handy if you want to make particleSystem.emitter _eq_ someMesh.position.   Easily switchable_co_ mesh-to-mesh.\n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s a good tip. I already checked if Empties are exportet from Blender (they are) and one could use them as placeholders for such things. However I think i will need a mesh to give particles some kind of shape. But I_t_m not really at this point_co_ still trying to setup everything (IDE and stuff).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]