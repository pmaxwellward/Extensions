[{"Owner":"Alenvei","Date":"2018-04-09T12:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys I have one issue .   I unable to import meshes when i using _lt_strong_gt_Class ()_lt_/strong_gt_ but everything works  except for importing meshes.  You can see my code  here _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_class Player {\n  constructor(scene) {\n\n \n  this.scene _eq_ scene_sm_     \n  this._skeleton_sm_\n\n       BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_skull.babylon_qt__co_ this.scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) {\n        skull _eq_ newMeshes[0]_sm_\n        this._skeleton _eq_ skeletons[0]_sm_\n       \n        skull.rotation.y_eq_ Math.PI_sm_\n         \n        scene.beginAnimation(skeletons[0]_co_ 0_co_ 501_co_ true_co_ 1)\n\n         this.collider _eq_ BABYLON.Mesh.CreateBox(_qt_collider_box_qt__co_ .32_co_ scene_co_ false)_sm_\n         this.collider.position.y _eq_ .151_sm_\n         this.collider.rotation.y _eq_  0_sm_\n         this.collider.ellipsoid _eq_ new BABYLON.Vector3(0.155_co_ 1.14_co_ 0.155)_sm_\n         this.collider.ellipsoidOffset _eq_ new BABYLON.Vector3(0_co_ 1.0_co_ 0)_sm_\n         this.collider.isVisible _eq_ false_sm_\n         skull.parent_eq_ this.collider_sm_        \n\n       \n      })_sm_\n    }\n  get mesh (){\n   return this.collider_sm_\n    }\n  }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhy is this didn_t_t work ? It is becouse babylon-loaders doesn_t_t support _lt_strong_gt_Class ()  _lt_/strong_gt_or do I do something wrong ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you in advance for your answers _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-09T16:32:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat error do you get? Can you repro in the PG?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-04-09T16:58:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttry add _lt_br /_gt_\n\tlet _this _eq_ this before ImportMesh function_co_ and on Import function use _this instead of this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-04-09T17:04:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_strong_gt_This error _lt_/strong_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt__lt_strong_gt__dd_ BJS - [18_dd_33_dd_41]_dd_ Unable to import meshes from skull.babylon_dd_ Error in onSuccess callback.   _lt_/strong_gt__lt_/span_gt__lt_span_gt_I can_t_t repro my code _lt_/span_gt_ _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_literally but here is exampel how it looks like   _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JUKXQD%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JUKXQD#5 _lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-04-09T17:19:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_ sorry for my  _lt_span_gt_dumb_lt_/span_gt_  question ..but you  mean like this ?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_class Player {\n  constructor(scene) {\n\n  let  _this _eq_ this_sm_\n\n _this.scene _eq_ scene_sm_\n\n _this.import _eq_ BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_skull_color.babylon_qt__co_ _this.scene_co_function(newMeshes_co_ particleSystems_co_ skeletons) {\n\n  })_sm_\n }\n}       _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI m self-taught  so ...  _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_I_t_m slow in this _lt_/span_gt__lt_/span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-04-09T18:40:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_211391_qt_ data-ipsquote-contentid_eq__qt_36928_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1523293497_qt_ data-ipsquote-userid_eq__qt_28941_qt_ data-ipsquote-username_eq__qt_Alenvei_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Alenvei said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_strong_gt_This error _lt_/strong_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt__lt_strong_gt__dd_ BJS - [18_dd_33_dd_41]_dd_ Unable to import meshes from skull.babylon_dd_ Error in onSuccess callback.   _lt_/strong_gt__lt_/span_gt__lt_span_gt_I can_t_t repro my code _lt_/span_gt_ _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_literally but here is exampel how it looks like   _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#JUKXQD%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#JUKXQD#5 _lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tin this situation_co_ it_t_s not the problem that I thought._lt_br /_gt_\n\tNo problem_co_ try with a try catch each line_co__lt_br /_gt_\n\tps_dd_ but I think the problem comes from here\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_211355_qt_ data-ipsquote-contentid_eq__qt_36928_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1523278641_qt_ data-ipsquote-userid_eq__qt_28941_qt_ data-ipsquote-username_eq__qt_Alenvei_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Alenvei said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_this_lt_/span_gt_._skeleton _eq_ skeletons[_lt_span_gt_0_lt_/span_gt_]_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\ttry console skeletons_co_ maybe it_t_s empty\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-04-09T19:06:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you  very much _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_ you was right _dd_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#8e44ad_sm__qt__gt_this._lt_/span_gt__lt_/strong_gt__skeleton _eq_ skeleton[0] made a problem  with import  meshes  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-04-09T19:37:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_ I have littel problem when iI trying scope_lt_strong_gt_ _lt_span style_eq__qt_color_dd_#8e44ad_sm__qt__gt__this_lt_/span_gt_.collider _lt_/strong_gt_...  here is my code _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_class Player {\n  constructor(scene_co_camera) {\n  let  _this _eq_ this_sm_\n\nBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_skull_color.babylon_qt__co_ this.scene_co_function (newMeshes_co_ particleSystems_co_ skeletons) {\n         skull _eq_ newMeshes[0]_sm_\n\n        skull.rotation.y_eq_ Math.PI_sm_\n        skull.position.y_eq_-0.15_sm_\n         //var anim _eq_ scene.beginAnimation(skeletons[0]_co_ 0_co_ 501_co_ true_co_ 1.5)_sm_\n        scene.beginAnimation(skeletons[0]_co_ 0_co_ 501_co_ true_co_ 1)\n         _this.collider _eq_ BABYLON.Mesh.CreateBox(_qt_collider_box_qt__co_ .32_co_ scene_co_ false)_sm_\n         _this. collider.position.y _eq_ .151_sm_\n         _this. collider.rotation.y _eq_  0_sm_\n         _this. collider.ellipsoid _eq_ new BABYLON.Vector3(0.155_co_ 1.14_co_ 0.155)_sm_\n         _this.collider.ellipsoidOffset _eq_ new BABYLON.Vector3(0_co_ 1.0_co_ 0)_sm_\n      //   _this. collider.isVisible _eq_ false_sm_\n         skull.parent _eq_ _this.collider_sm_\n         camera.target _eq_ _this.collider_sm_\n\n\n }\nget mesh (){\n return _this.collider_sm_\n}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhen i trying to call it  in main.js  this error shows up  _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt__lt_strong_gt_Uncaught ReferenceError_dd_ _this is not defined._lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2018-04-09T20:23:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok I solved that _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  in _lt_strong_gt__lt_span style_eq__qt_color_dd_#3498db_sm__qt__gt_get _lt_/span_gt_mesh(){ _lt_span style_eq__qt_color_dd_#8e44ad_sm__qt__gt_return  _this_lt_/span_gt_.collider }  _lt_/strong_gt_I changed _lt_strong_gt__lt_span style_eq__qt_color_dd_#8e44ad_sm__qt__gt__this_lt_/span_gt_.collider_lt_/strong_gt_ to_lt_strong_gt_ _lt_span style_eq__qt_color_dd_#8e44ad_sm__qt__gt_this_lt_/span_gt_.collider_lt_/strong_gt_  and now is it working perfectly .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-04-09T21:17:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat! Well done _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]