[{"Owner":"reddozen","Date":"2015-10-14T14:09:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Seems to be a little process heavy demo... looks like I won_t_t be using lense flares in my game... lol_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Samsung Note4 - Lense flare demo_lt_/p_gt__lt_p_gt_FireFox_dd_ 21~30 FPS fluxuating_lt_/p_gt__lt_p_gt_Chrome_dd_ steady 30 FPS_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Work Issue Laptop (Not great) - Lense flare demo_lt_/p_gt__lt_p_gt_FireFox_dd_ 50~60 FPS_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-14T15:47:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_flares require a lot of additional work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KosLooney","Date":"2015-10-14T17:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_100704_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17829_qt_ data-ipsquote-username_eq__qt_gamestudiohx_qt_ data-cite_eq__qt_gamestudiohx_qt_ data-ipsquote-timestamp_eq__qt_1444760987_qt__gt__lt_div_gt__lt_p_gt_With your latest changes I got pretty big speedup - from 5 to ~25fps but still_co_ when I remove skybox from scene I_t_m getting 60fps._lt_/p_gt__lt_p_gt_And I was trying all kinds of reflectionTexture.coordinatesMode (Texture.CUBIC_MODE too - in this case viewdir was used I guess ?!)_lt_/p_gt__lt_p_gt_Anyway_co_ its still unusable for me so I guess I_t_ll use layer as a background image for current project._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you have lighting enabled or disabled on your skybox material?_lt_/p_gt__lt_p_gt_On my iPad3 i get 60 FPS on the PG environment demo_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?13_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?13_lt_/a_gt_ ._lt_/p_gt__lt_p_gt_When i enable lightting (skyboxMaterial.disableLighting _eq_ false_sm_) it crashes down to ~20 FPS_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamestudiohx","Date":"2015-10-15T16:15:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wooow... you just saved my project _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_This brings 60fps back to my game. Thank you @KosLooney !_lt_/p_gt__lt_p_gt_I would never have thought of that..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-19T15:49:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmmm_co_ it_t_s great to have improved the shader_co_ but now we have something which doesn_t_t work anymore. With the new shader version_co_ the bump doesn_t_t influence correctly the reflection anymore..._lt_/p_gt__lt_p_gt_The more powerfull the reflection is (via level or fresnel)_co_ the less the bump texture has influence on it_co_ and that is a wrong behavior._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DK_co_ do you think you_t_ll be able to keep your optimisation while still having bump acting correctly ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-19T16:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes...I_t_ll find a way_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-19T17:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok I think I nailed it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ can you try now?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-19T19:12:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeaaah!! Everything went back to normal._lt_/p_gt__lt_p_gt_You_t_re the boss!! Many thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]