[{"Owner":"joeBImagine","Date":"2017-11-01T21:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am trying to wrap my head around the differences.  Currently I do understand ImportMesh for the most part (allows you to import a mesh into an existing scene)and how to create a scene_co_ but FilesInput not so much.  Are there any examples (for noobs!) that go into more detail than the documentation?  I have looked at the sandbox version with filesInput_co_ but that does not show a babylon file unless said babylon files has lights and cameras.  And as always_co_ please forgive me if this question has already been asked and answered!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-02T16:45:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and no worry there is no dumb question _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe FilesInput class is used to support Drag_t_n_t_Drop and HTML file input element.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var filesInput _eq_ new BABYLON.FilesInput(engine_co_ null_co_ sceneLoaded_co_ null_co_ null_co_ null_co_ function () { BABYLON.Tools.ClearLogCache() }_co_ null_co_ sceneError)_sm_\nfilesInput.monitorElementForDragNDrop(canvas)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWith this code_co_ you can drag and drop a .babylon file to your canvas to load it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joeBImagine","Date":"2017-11-02T22:23:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAwesome thank you Delta!!  You are boon of knowledge!!_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]