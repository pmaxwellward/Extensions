[{"Owner":"legallon","Date":"2018-04-09T14:48:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m just discovering BabylonJS and this is my first post ever on a forum so please be patient with me _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I_t_m working on a small project which consists at the moment in creating meshes via a funtion addMesh()_co_ and I wanted to add a _qt_selection animation_qt_ to all my meshes_co_ basically by changing their color to an emissive white one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ this seems not to be working_co_ and I saw on other topics that I needed to create an actionManager for every mesh of my scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way to make my code bellow work and have an actionManager associated to all meshes created by my function addMesh()?  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are the 2 main functions _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var makeOverOut _eq_ function (mesh) {\n  mesh.actionManager.registerAction(new BABYLON.SetValueAction\n    (BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ mesh.material.emissiveColor))_sm_\n  mesh.actionManager.registerAction(new BABYLON.SetValueAction\n    (BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ BABYLON.Color3.White()))_sm_\n  mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n    (BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1)_co_ 150))_sm_\n  mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n    (BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1.1_co_ 1.1_co_ 1.1)_co_ 150))_sm_\n}\n\n\n\nfunction addMesh() {\n  var box _eq_ BABYLON.Mesh.CreateBox(_t_box_t__co_ 100_co_ scene)_sm_\n  box.position _eq_ new BABYLON.Vector3(\n    Math.random() * 480_co_\n    50_co_\n    Math.random() * 480_co_\n  )_sm_\n  makeOverOut(box)_sm_\n\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThank you for you time_co_ any suggestion would be appreciated ! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tps _dd_ Sorry for my English .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-09T16:27:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo problem with your english! Mine is far worse _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a playground for you_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XR0Q0H_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XR0Q0H_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe big difference is at line #31 (you need to instanciate the actionManager _dd_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-04-10T07:13:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_211366_qt_ data-ipsquote-contentid_eq__qt_36931_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1523285310_qt_ data-ipsquote-userid_eq__qt_31075_qt_ data-ipsquote-username_eq__qt_legallon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 hours ago_co_ legallon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOh ok I see what you mean.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI corrected that and it_t_s working perfectly_co_ maybe I should_t_ve seen that alone !  \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks a lot for your time _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tps _dd_ your framework rocks ! \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-04-11T14:17:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Hi again_co_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I_t_ve done few other things on my project_co_ but now I come back to a similar problem _dd_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I import a .babylon object_co_ let_t_s say the _qt_skull.babylon_qt_ in a createfunction which allows me to create skulls_co_ and I want to apply the actions that we talked about just above._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Yet only the scaling modification works_co_ the white emissive color doesn_t_t_co_while it works for standard Babylon Meshes as a cube or a sphere._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Do we need to use a different action or thing like this when it comes to imported meshes or am I just doing a common stupid mistake ? _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Here_t_s my code _dd_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ var mesh_sm_\n BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_/usine3d/FromScratch/objets/_qt__co_ _qt_skull.babylon_qt__co_ scene_co_ function \n (newMeshes) {\n\n   mesh _eq_ newMeshes[0]_sm_\n   scene.registerBeforeRender(objProperty)_sm_\n      })_sm_\n\n\n  function objProperty(){\n\n\n        var material _eq_ new BABYLON.StandardMaterial(_qt_material01_qt__co_ scene)_sm_\n        mesh.material _eq_ material_sm_\n\n        mesh.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n\n        mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n          (BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh_co_ _qt_emissiveColor_qt__co_ new BABYLON.Color3(0_co_ 0_co_ 0)_co_ 150))_sm_\n        mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n          (BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh_co_ _qt_emissiveColor_qt__co_ new BABYLON.Color3.White()_co_ 150))_sm_\n\n        mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n          (BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1)_co_ 150))_sm_\n        mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction\n          (BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1.1_co_ 1.1_co_ 1.1)_co_ 150))_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks for your time_co_ any suggestion would be massively appreciated !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit _dd_  my code doesn_t_t work since I modified and tried  different things for the emissiveColor_co_  sorry for that\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-11T16:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you_t_re good?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-04-12T07:06:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo I_t_m not_co_  sorry for my edit it was misunderstandable ! I definitely need an advice for this  _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-12T15:15:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou should not call objProperty pre frame_dd_ scene.registerBeforeRender(objProperty)_sm_ })_sm_ will call objPropery 60 times per sec\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"legallon","Date":"2018-04-12T15:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI quite of managed to solve my problem_co_ if you look at my objProperty call in the registerBeforeRender_co_ I call objProperty without _qt_()_qt_ . But when I noticed that mistake ( is it a mistake ? because this didn_t_t raise any error) and changed my call to objProperty() all worked fine. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fact that no error was raised didn_t_t help me to solve this but apparently it was juste a syntax error.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]