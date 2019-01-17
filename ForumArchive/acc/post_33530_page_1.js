[{"Owner":"paleRider","Date":"2017-10-19T10:23:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_everybody_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnly a quick question.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsually I prefer to use _qt_Observables_qt_ over others BJS alternatives_co_ in order to manage all user interaction_co_ namely_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myScene.onPointerObservable.add(onPointerDown_co_BABYLON.PointerEventTypes.POINTERDOWN)_sm_\nmyScene.onPointerObservable.add(onPointerUp_co_BABYLON.PointerEventTypes.POINTERUP)_sm_\nmyScene.onPointerObservable.add(onPointerMove_co_BABYLON.PointerEventTypes.POINTERMOVE)_sm_\n...\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis works great but it lacks of the functionality of changing the pointer to the one with the hand_co_ so I need to add an extra step_co_ by means of Action Manager_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myMesh.actionManager_eq_actionManager_sm_\nmyMesh.actionManager.registerAction(new BABYLON.DoNothingAction(BABYLON.ActionManager.OnPointerOverTrigger))_sm_ /*pointer change*/_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tObviously_co_ using the resources of an Action Manager only for the _qt_cosmetic_qt_ aim of change the pointer is an overkill. Is there any more clever alternative?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-19T10:26:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can simply do it using JavaScript _dd_ _lt_a href_eq__qt_https_dd_//www.w3schools.com/jsref/prop_style_cursor.asp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.w3schools.com/jsref/prop_style_cursor.asp_lt_/a_gt_ _co_ while using the observers. Or did I miss something?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-19T13:54:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_RaananW_lt_/strong_gt_ (and thanks for your time)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe case is that I don´t want to alternate the cursor when _qt_hovering_qt_ on a DOM element_co_ but on a BJS Mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I am now who is missing something _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-19T16:05:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you can still rely on the bjs system _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#RLQVGD_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#RLQVGD_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-19T19:00:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_Deltakosh_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst of all_co_ thanks for your time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ I have to take a look to the  _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_em_gt__lt_strong_gt_enablePointerMoveEvents_lt_/strong_gt__lt_/em_gt_ method of Mesh object_co_ as _lt_/span_gt_ _lt_b_gt_ I_lt_/b_gt__lt_b_gt_ di_lt_/b_gt__lt_b_gt_d not know it exists_lt_/b_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ the property _lt_em_gt__lt_strong_gt_isPickable_lt_/strong_gt__lt_/em_gt_ is initialized as true with the construction of each new Mesh_co_ isn_t_t it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd a Mesh is pickable even if is not visible (hidden)_co_ yes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-20T08:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHowdy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo your questions_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Yes_co_ isPickable is true per default _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L191_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L191_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. No_co_ it will be filtered by the default predicate_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L1421_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L1421_lt_/a_gt_ (should be visible_co_ enabled_co_ ready_co_ and pickable)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-20T08:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_RaananW_lt_/strong_gt__co_ ... and thanks for your time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOK_co_ I thought not-visible meshes were  still pickable (weird behavior). Obviously I_t_m wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me check all this info before check as solved this question thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-27T15:17:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_Deltakosh_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have almost gone mad just as trying to suppose what I was doing wrong in my code_co_ in order to reproduce the behavior of your PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinally I_t_ve arrived to the conclusion that _lt_strong_gt_AbstractMesh.enablePointerMoveEvents_lt_/strong_gt_ property_co_ wich is doing _qt_all the magic_qt_ here_co_ is only available with _lt_strong_gt_BJS v3.1_lt_/strong_gt_ Isn´t it?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ground.isPickable _eq_ true_sm_\nground.enablePointerMoveEvents _eq_ true_sm_\n\nscene.onPointerMove _eq_ function(evt_co_ pickResult) {\n  if(pickResult.hit)\n    canvas.style.cursor _eq_ _qt_pointer_qt__sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf my assumptions are true_co_ can you think in a  way to do the same using _lt_strong_gt_BJS v3.0_lt_/strong_gt_? (as this is a production project we need to use the stable version of the engine).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-27T15:28:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tin 3.0 you can just update the scene.pointerMovePredicate_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.pointerMovePredicate _eq_ function(mesh) {\n return mesh.isPickable &amp_sm_&amp_sm_ mesh.isVisible &amp_sm_&amp_sm_ mesh.isReady() &amp_sm_&amp_sm_ mesh.isEnabled()_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tJust use what you need here\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-27T16:48:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_strong_gt_Deltakosh_lt_/strong_gt__co_ but ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.... after trying_co_ I can see how I must proceed inside pointerMovePredicate in order to detect when my pointer is over a specific mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-10-28T02:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmaybe it_t_s helpful_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DSH13I%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DSH13I#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-28T06:36:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there _lt_strong_gt_Nabroski_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem with your solution is that_co_ as said before_co_ _lt_strong_gt_AbstractMesh.enablePointerMoveEvents_lt_/strong_gt_ is not available with BSJ 3.0 (current stable version for production).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ in my case a straightforward solution would be to have implemented a pair of (sadly missing) observables_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.PointerEventTypes._lt_strong_gt_POINTERIN_lt_/strong_gt__lt_br /_gt_\n\tBABYLON.PointerEventTypes._lt_strong_gt_POINTEROUT_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to implement them but the problem is the lack of a mechanism to detect when the pointer is hovering on a mesh _lt_u_gt_without_lt_/u_gt_ clicking/tapping.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-10-29T02:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18630-palerider/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18630_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18630-palerider/_qt_ rel_eq__qt__qt__gt_@paleRider_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are so many different methods to give focus to elements in HTML_co_ although it depends on your specific needs. Many of the problems I read about on this forum result from everyone trying to accomplish functions within a WebGL script or Javascript in general_sm_ when there are SO MANY simple shortcuts using other tools within the HTML5 framework which will accomplish most everything developers wish to accomplish - and with so many more options. I personally would almost always build UI functionality using CSS and perhaps a combination of CSS and JS. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead of building one of the dozens of examples which might show the # of available methods_co_ here is a link which will show you the JSFiddle examples of many methods to do what you are attempting. Also_co_ if you are not familiar with many of these methods_co_ then you will find them invaluable to future and current projects. If you_t_re already familiar with all of the methods in the link I_t_m providing_co_ then I must be missing some issue specific to your scene. Otherwise_co_ as I now write much of my HTML code in PHP using style sheets for such functionality_co_ I highly recommend that everyone know the power of working outside of their babylon.js scipt and use babylon.js for what it is designed. I know the current goal in the BS community is to be everything to everyone_co_ but this simply isn_t_t a practical solution in my opinion. And it took me almost a year to learn this the hard way - mostly thanks to users on this forum such as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ and my biggest pain in the ass _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ - whom all took me back to the advancements made in the basics of web development which I assumed I might be able to overlook as babylon.js could accomplish so many of the basics. And for those developers who have been instrumental in my personal development for online apps and I_t_ve neglected to mention here_co_ please forgive me as so many of you have allowed me to accomplish so much that I could never have accomplished on my own - until now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the link I recommend to provide you with the answer you_t_re looking for is on the following page_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/CSS/_dd_active_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/CSS/_dd_active_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI personally have built versions of most all examples on this page which I wasn_t_t already familiar with_co_ as I find I use them almost daily regardless of the application - providing it_t_s front end developer work. If you don_t_t follow why I recommend working outside of babylon.js for this and so many other functions which users of BJS are trying to fill_co_ I_t_m happy to expand this response. Otherwise_co_ as for any UI/UX work_co_ I find I am able to create a far better UI and experience for the user outside of the BJS framework_sm_ although I applaud all of the developers on this forum who are trying to make babylon.js a one stop shop. However_co_ I personally believe that babylon.js is the best in WebGL frameworks_co_ and that it should be used for what it was designed - as an uncompiled (currently)  language to deliver OpenGL content to a webpage. Although no matter how much it is desired_co_ BJS still must work inside and in harmony with the existing HTML framework. So why not work with the endless tools which already exist in harmony with HTML5? Especially CSS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-10-29T20:41:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_dbawel_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs said before (in relation to _lt_strong_gt_RaananW_lt_/strong_gt__t_s_lt_strong_gt_ _lt_/strong_gt_kind answer)_co_ using plane JS DOM events in order to detect the hovering of the pointer _lt_u_gt_on a DOM element_lt_/u_gt_ is not what I need_co_ but to detect when the pointer is _lt_u_gt_over a BJS Mesh object_lt_/u_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way_co_ although I was initially reluctant to implement the solution I had initially reached (as I found using Actions here could be and overkill)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myMesh.actionManager.registerAction(_lt_span_gt_new_lt_/span_gt_ BABYLON.DoNothingAction(BABYLON.ActionManager.OnPointerOverTrigger))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t...maybe it is the best way after all_co_ so I_t_m going to implement my code in that direction and I_t_m marking this question as solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_P.S. Of course_co_ when the next version of BJS (v3.1) becomes stable_co_ my soltion could be the one by _lt_strong_gt_Deltakosh_lt_/strong_gt__dd_ _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myMesh.enablePointerMoveEvents _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n\nscene.onPointerMove _eq_ _lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(evt_co_ pickResult)_lt_/span_gt_ {_lt_/span_gt_\n  _lt_span_gt_if_lt_/span_gt_(pickResult.hit)\n    canvas.style.cursor _eq_ _lt_span_gt__qt_pointer_qt__lt_/span_gt__sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-30T15:52:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share your experiment on the PG? I_t_ll fix it for you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if think it should simple like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.pointerMovePredicate _eq_ function(mesh) { return mesh.name _eq__eq__eq_ _qt_youknowmyname_qt__sm_ }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-11-02T10:10:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_Deltakosh_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d swear I_t_d answered to your kind offer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe case is that at the moment I_t_m happy with the ActionManager solution_co_ even more knowing that with BJS v3.1 the way to go will be_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ground.isPickable _eq_ _lt_span_gt_true_lt_/span_gt__sm_\nground.enablePointerMoveEvents _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n\nscene.onPointerMove _eq_ _lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(evt_co_ pickResult)_lt_/span_gt_ {_lt_/span_gt_\n  _lt_span_gt_if_lt_/span_gt_(pickResult.hit)\n    canvas.style.cursor _eq_ _lt_span_gt__qt_pointer_qt__lt_/span_gt__sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBet regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]