[{"Owner":"JCPalmer","Date":"2017-06-28T19:25:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am continuing my work on_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/29915-particle-hair/_qt_ rel_eq__qt__qt__gt_ Particle Hair_lt_/a_gt_.  I can transfer vertices without faces in Tower of Babel.  See_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_hair.jpg.58463ef887c1d2d745b77947a8436089.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13639_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/hair.jpg.58463ef887c1d2d745b77947a8436089.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMatrix weights / indices are not really capture-able_co_ so I am just trying to generate them.  If they need to be generated_co_ might as well do it in Javascript vs Python and save the transfer bandwidth.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was not going to get real fancy with the number of influencers_co_ just 1.  As soon as I add the skeleton_co_ the Hair (LinesMesh) dis-appears.  I added both vertex colors &amp_sm_ skeletons to LinesMesh for 3.0.  I really wanted to get this working prior to 3.0 production.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI could just be having a mental block_co_ so I tried to do the simplest _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZBXTI5_qt_ rel_eq__qt_external nofollow_qt__gt_playground _lt_/a_gt_scene.  If you change the_lt_span style_eq__qt_color_dd_#2ecc71_sm__qt__gt_ if (1 _eq__eq__eq_ 0)_lt_/span_gt_ to _lt_span style_eq__qt_color_dd_#2ecc71_sm__qt__gt_if(1 _eq__eq__eq_ 1)_lt_/span_gt__co_ it also disappears.  Any clues?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-06-29T09:30:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis looks amazing!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThough_co_ you need a good PC to handle this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ what is the question?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see the playground has the skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry to move it around?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd make it ragdoll-type?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-29T15:21:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis should work.Let me have a look\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-29T20:38:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26420-borislav/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26420-borislav/_qt_ rel_eq__qt__qt__gt_@Borislav_lt_/a_gt__co_ it is not even combed yet!  My objective is for the LineMesh to simply stay with the rest of the body.  Parenting to body will keep it at the same origin as body if body position or rotation changes. If the head turns_co_ or knees bend_co_  the hair will not move along with it without also using the skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor head turning purposes_co_ I am specifying a stiffness factor.  If you said_co_ 0.5 &amp_sm_ a strand had 5 segments (6 vertices)_dd_  Then the weights from scalp out would be_dd_ 1.0_co_ 0.9_co_ 0.8_co_ 0.7_co_ 0.6_co_ &amp_sm_ 0.5.  Having a lower value at the end means it would not rotate as much.  This is really needed for longer hair_co_ or the hair would cut through the body when turning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith my hero_co_ checking on what might be wrong_co_ I moved ahead_co_ &amp_sm_ have finally figured out how to add a custom panel onto particle properties tab.  Took me all day &amp_sm_ part of yesterday to figure out.  Nobody must be doing this_co_ Googling will not get you even a close answer.  May try to add more control (color_co_ patterns)_co_ if I get what I got now to run_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13656_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/hairSettings.jpg.d58033e9977dda40f3d41e42c81583fd.jpg_qt_ alt_eq__qt_hairSettings.jpg.d58033e9977dda40f3d41e42c81583fd.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tKind of disagree about the high end pc comment.  This is a single mesh_co_ so single draw.  No texture_co_ so very simple fragment shader.  Vertices / segments are removed during export using Limited Dissolve operation.  Oh yeah_co_ might add degree control for the dissolve in UI.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-06-29T20:55:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_180153_qt_ data-ipsquote-contentid_eq__qt_31340_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1498768738_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 minutes ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26420-borislav/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26420-borislav/_qt_ rel_eq__qt__qt__gt_@Borislav_lt_/a_gt__co_ it is not even combed yet!  My objective is for the LineMesh to simply stay with the rest of the body.  Parenting to body will keep it at the same origin as body if body position or rotation changes. If the head turns_co_ or knees bend_co_  the hair will not move along with it without also using the skeleton.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tFor head turning purposes_co_ I am specifying a stiffness factor.  If you said_co_ 0.5 &amp_sm_ a strand had 5 segments (6 vertices)_dd_  Then the weights from scalp out would be_dd_ 1.0_co_ 0.9_co_ 0.8_co_ 0.7_co_ 0.6_co_ &amp_sm_ 0.5.  Having a lower value at the end means it would not rotate as much.  This is really needed for longer hair_co_ or the hair would cut through the body when turning.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWith my hero_co_ checking on what might be wrong_co_ I moved ahead_co_ &amp_sm_ have finally figured out how to add a custom panel onto particle properties tab.  Took me all day &amp_sm_ part of yesterday to figure out.  Nobody must be doing this_co_ Googling will not get you even a close answer.  May try to add more control (color_co_ patterns)_co_ if I get what I got now to run_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/hairSettings.jpg.d58033e9977dda40f3d41e42c81583fd.jpg_qt_ title_eq__qt_Enlarge image_qt_ data-fileid_eq__qt_13656_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_hairSettings.jpg.d58033e9977dda40f3d41e42c81583fd.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13656_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/hairSettings.jpg.d58033e9977dda40f3d41e42c81583fd.jpg_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tKind of disagree about the high end pc comment.  This is a single mesh_co_ so single draw.  No texture_co_ so very simple fragment shader.  Vertices / segments are removed during export using Limited Dissolve operation.  Oh yeah_co_ might add degree control for the dissolve in UI.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is very complicated _dd_/.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-29T22:39:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI cannot test as my version of LinesMesh does not support bones _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcan you PR your change?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-30T00:27:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is not directly in the LinesMesh class itself.  The Geo is in Mesh.  The material_co_ ShaderMaterial_co_ assigns matrix weights indices &amp_sm_ number of influencers attributes (I stole what _lt_span_gt__lt_span_gt_Sebavan did for _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Layer/babylon.highlightlayer.ts#L556_qt_ rel_eq__qt_external nofollow_qt__gt_HighlightLayer.isReady_lt_/a_gt_).  The Color.vertex.fx got stuff added for bones at the same time as vertex colors.  This is the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/4c55dc653b74e6a7b51f8ec810642c4a596d3a90_qt_ rel_eq__qt_external nofollow_qt__gt_PR_lt_/a_gt_._lt_span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI probably have messed something up.  At least with this Playground that looks like it should be a valid test_co_ it might be debugged without dragging my massive generated data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-30T15:26:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually_co_ now I am remembering from the very end of how far I got in my initial push in April.  After I went thru all the changes to all those files_co_ I realized that LinesMesh was mostly a _qt_glue job_qt_ of other pieces.  It could actually be made with BABYLON.Mesh &amp_sm_ a standard material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou commented that the fragment shader of StandardMaterial might not be as efficient_co_ I think.  There are also other reasons for ShaderMaterial to be able to use skeletons_co_ not just Lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you could figure out what I got wrong_co_  I think I am going to refactor my QI.Hair class to inherit from QI.Mesh not BABYLON.LinesMesh.  Still use ShaderMaterial.  Then I might be able to computer generate shapekeys for bounce up_co_ it the character is running or something.  LinesMesh could use the 3.0 morph facility_co_ but I would not to mix the 2 different methods.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-30T16:17:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/c7ee18dd1553de244515d37ee25467eae394e283_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/c7ee18dd1553de244515d37ee25467eae394e283_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-30T17:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI need do something_co_ but if I do not try later today_co_ with work tomorrow (slacking off in the near future is highly probable).  Yeah_co_ it might be nice to actually send the values of the bone matrices to the vertex shader.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-07-01T18:33:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tComplete success when stiffness is set to 1.0. The example shown in first post looks like a brush head firmly stuck on the head as the character moves.  I need to work to verify that this strategy of limpness works for long hair works as head turns.  That is at my level though_co_ not framework.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]