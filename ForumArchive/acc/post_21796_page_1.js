[{"Owner":"Xav","Date":"2016-04-08T15:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to toggle Overlay on my obj.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do this _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//This is my function to get selected object_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction MouseOverObj(){_lt_br /_gt_\n\t            currentMesh_eq_scene.meshUnderPointer_sm__lt_br /_gt_\n\t            if (currentMesh ){_lt_br /_gt_\n\t            return currentMesh_sm__lt_br /_gt_\n\t            }_lt_br /_gt_\n\t        }_lt_br /_gt_\n\t        _lt_br /_gt_\n\t // and my function to changed it on mouse over_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t   _lt_br /_gt_\n\t        function toggleOverlay (){_lt_br /_gt_\n\t        MouseOverObj()_sm__lt_br /_gt_\n\t            if (obj){_lt_br /_gt_\n\t                if(obj !_eq__eq_ currentMesh ){_lt_br /_gt_\n\t                    obj.renderOverlay_eq_false_sm__lt_br /_gt_\n\t                }else{_lt_br /_gt_\n\t                    if (obj.renderOverlay _eq__eq_ false){_lt_br /_gt_\n\t                        obj.renderOverlay_eq_true_sm__lt_br /_gt_\n\t                        //obj.OverlayAlpha_eq_0.2_sm__lt_br /_gt_\n\t                    }_lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            }_lt_br /_gt_\n\t            obj_eq_currentMesh_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i put it on \n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.registerBeforeRender(function() {_lt_br /_gt_\n\t                toggleOverlay()_sm__lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs work perfectly  but I wich your opinion on whether this is the best method to do this properly? (sorry for my bad english _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-08T15:32:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsounds like a good option. If you want you can create an repro on the playground that we can use to discuss and test.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xav","Date":"2016-04-13T19:40:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested on the playground but it does not work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1GFDNL%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1GFDNL#0_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it work perfectly with my .js script ... ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use it with .babylon file on the pickable enabled object.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-14T15:56:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a working version_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1GFDNL%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1GFDNL#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand I find it pretty great _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xav","Date":"2016-04-14T18:59:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThank\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]