[{"Owner":"JackFalcon","Date":"2017-12-20T00:47:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSuper hard to find -&gt_sm_ _lt_em_gt_faceId Labels on Ground Plane Subdivisions_lt_/em_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooked everywhere_co_ thought I saw it once. Going to go ahead a write the loop_co_ [now] (similar to the awesome-&gt_sm_ boxify)but still_co_ _lt_em_gt_does that exist already? _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-12-20T01:10:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgrab the vertex data_co_ get the indices and the positions_co_ using the indices get the correct position values and average them then place a label._lt_br /_gt__lt_br /_gt_\n\tI did it with vertices once_co_ Im not sure where that PG is though ill have to dig it up.  To do the faces will be just a extra step but the same process.  Let me see if i can find that PG._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\t*EDIT*\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2359657364_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/32139-positionpoint-labels/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_184260&amp_sm_embedComment_eq_184260&amp_sm_embedDo_eq_findComment#comment-184260_qt_ style_eq__qt_height_dd_278px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tThis will get you there.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-20T01:16:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tRock and Roll _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_!  A solution brewing here...  will use that link too. Thx!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-20T01:24:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSOLUTION_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.564f63b1036e5b031c9734ab4e2b960b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16323_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/image.png.564f63b1036e5b031c9734ab4e2b960b.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground with the full loop....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#G1A0IY_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#G1A0IY_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... and some text formatting. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPURPOSE_dd_ these faceIds are the same as a downRay retrieves when moving.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the index can be keyed in a metaMap which can then trigger metaBehaviors_co_ based on the position of the character.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEXAMPLE_dd_ enemies or environment can change behavior depending where you step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo easily seeing faceID is essential to key metaMap. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Happy to post the metaMap architecture as well if asked].\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]