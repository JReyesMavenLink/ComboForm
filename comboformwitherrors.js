// Can put in Javascript from the form here if needed OR if there's other JS code required

var tmpSessionId = Utils.createUniqueId() + "_" + Date.now();
// progressbar_configuration
var progressbar_element_id = "p_pbar_1";
var steps_progressbar_element_id = "p_pbar_step";

var responseCounter = 0;
var pageStartResponseTotal = 3;
var stepsResponseTotal = 14;
var responseTotal = pageStartResponseTotal;
// progressbar_configuration
var privatePostUserIds = [];
//var connectedCounter = 0;
var tasksOwned = [];
var tasksPending = [];
var tasksMatched = [];
var firstConnectedOnly = 0;
var tasksMavenOps = [];
var listofidsforactualhours = [];
var jsonWorkspaces;
var subjectIDS;
var idk;
var workstream;
var counterforwsupdate = 0;
var counterforwscomplete = 0;
var workstreamOwnerForOversight;
var oversightJSON;
var userData;
var allStoryData;
var actualHoursJSON;
var userId;
var allWorkspaceIds = [];
var arrayofCFVForActHour = [];
var allocationResource;
var allocationHours;
var formattedWorkspaceIds;
var customvalls;
var submitOnceCounter = 0;
var PETasks;
var cfvVals;
var allocationCounting;
var step2num = 1;
var givenSubjectIds = 478743325;
var fullListOfIds = [];
var stepNumberCounter = 0;
var resourcesToBeUpdated = [];
var resourceRelatedStoryId =[];
var resourcesToBeUpdatedForUpdateForMavenOps = [];
var resourcesToBeUpdatedForUpdateForTS = [];
var resourceWorkspaceIDMatchMavenOps = [];
var resourceWorkspaceIDMatchTS = [];
var createStoryRequests = [];
var createUpdateRequest = [];
var createUpdateRequestUpdateScenario = [];
var createUpdateRequestForPending =[];
var createUpdateRequestForPendingUpdateScenario = [];
var updateCompletion = [];
var deleteWorkspaceAllocation =[];
var deleteCompletionAllocation = [];
var updateCompletionAllocation = [];
var updateWorkspaceAllocation =[];
var createWorkspaceAllocation = [];
var updateStatus = [];
var completeTasks = [];
var publicPost = [];
var privatePost = [];
var fullTaskCFV;
var glTaskCFV;
var apiGridCall;
var step0_user_workstream = "user_workstream";
var step1_api_workspaces = "api_workspaces";
var step1_api_cfv_oversight = "api_cfv_oversight";
var step2_api_workstream_owner = "workstream_owner";
var step22_api_workstream_owner_for_oversight = "workstream_owner_for_oversight"
var step2_api_cfv_task = "api_cfv_task_base";
var step2_api_gl_task = "api_cfv_gl_task";
var step3_dm_cfv_task = "dm_cfv_task_base";
var step4_api_add_data = "api_cfv_additional_data";
var step45_all_project_data = "api_cfv_all_project_data";
var step5_api_actual_hours = "api_cfv_actual_hours";
var step6_api_allocation_data_part_1 = "api_cfv_allocations_hours_part_1";
var step6_api_allocation_data_part_2 = "api_cfv_allocations_hours_part_2";
var step7_cfv_values = "api_cfv_custom_values";
var step8_project_auto_invite_values = "api_project_auto_invite_values";
var step9_project_economics = "api_cfv_project_economics";
var step11_cfv_vals = "api_cfv_vals";

var TechServiceClose = "Thank you for all of your effort as we worked through this service engagement.\n\nIt has been a pleasure.\n\nI will soon be archiving our workspace, however it remains available for your viewing if you include archived projects in your Project List view.\n\n\n\nAs a reminder, your Client Success Representative is your primary point of contact at Mavenlink.\n\nShould you have any questions or concerns regarding your Mavenlink solution, please route these through our Support team as this will be the most efficient path to resolution.";
var TechServiceOpen = "Thank you for all of your effort as we worked through this service engagement.\n\nIt has been a pleasure.\n\nYour Client Success Representative is your primary point of contact at Mavenlink.\n\nShould you have any questions or concerns regarding your Mavenlink solution, please route these through our Support team as this will be the most efficient path to resolution.";
var EnterpriseCustomSOW = "Thank you for all of your hard work and dedication these months.\n\nIt has been a pleasure to work with the team and I look forward to working together again in the future.\n\nNow that the project is complete, I will soon be archiving our workspace, however it remains available for your viewing if you include archived projects in your Project List view.";
var MavenOpsMid = "MavenOps Month Complete";
var MavenOpsLastOpen = "MavenOps Month Complete";
var MavenOpsLastClose = "Thank you for all of your hard work and dedication these past months during your MavenOps Program. You were a pleasure to work with and I look forward to working together again in the future. Because MavenOps is complete I will soon be archiving our workspace, however it remains available for your viewing if you include archived projects in your Project List view.\n\n\n\nAs a reminder, your Client Success Representative is your primary point of contact at Mavenlink.  I referenced your other Mavenlink resources below. Please feel free to let us know if you have any questions.\n\n\n\nMavenlink Support\n\n\n\nClient Success Manager\n\nYour account has a dedicated Client Success Manager whose primary goal is to ensure the time you spend in Mavenlink is as streamlined and beneficial to your business as possible. From the moment you join, to checking in at important milestones during the life of your subscription, they will be there to answer your questions and act as your liaison between all other teams and services made available to our Premier clients.\n\n\n\nAccess to Training Center\n\nhttps://www.mavenlinktrainingcenter.com/\n\nCoupon code: “MavenOps”\n\n\n\n24/7 Live Help\n\nOur 24/7 Live Help support team is available to all members of your account, 365 days a year, for any “how-to” feature and functionality questions you may have. Simply click the “Support” button found on the top right side of every page in Mavenlink, and select “Live Help.” One of our team members will be glad to assist.\n\n\n\n24/7 Support Ticketing\n\nOur Support ticketing team can assist with reconciling any bugs you have found in the system, and provide general troubleshooting support. Please click the “Support” button at the top of the page and select the option for Help Center and Submit a Ticket. They will investigate any concerns you have, engage our engineering team if need be, and keep you constantly updated. Support tickets can also be submitted by sending an email to support@mavenlink.com.\n\n\n\nMavenlink Knowledge Base\n\nPlease refer to our Knowledge Base for information on all things Mavenlink! From articles on our company history to specific feature walk throughs, the Knowledge Base is an excellent reference point for any questions about Mavenlink. It’s a great place to refer any new account members who are looking to learn more about what Mavenlink is and what it has to offer.\n\n\n\nWebinars\n\nFor larger feature enhancements, please be on the lookout for our free webinars led by our Product and Training teams. Simply register for the webinar and login at the scheduled time. If you or members of your account are unable to attend, please register for the webinar and a recording of the session will be emailed to you directly.\n\n\n\nThank you!\n\n";


var step0_query_user_workstream = "";
var step1_query_api_cfv_oversight = "";
var step1_query_api_workspaces = "";
var step2_query_api_workstream_owner = "";
var step22_query_api_workstream_owner_for_oversight = "";
var step2_query_api_cfv_task = "";
var step2_query_api_gl_task = "";
var step3_query_dm_cfv_task = "";
var step4_query_api_add_data = "";
var step45_query_all_project_data = "";
var step5_query_api_actual_hours = "";
var step6_query_api_allocation_data_part_1 = "";
var step6_query_api_allocation_data_part_2 = "";
var step7_query_cfv_values = "";
var step8_query_project_auto_invite_values = "";
var step9_query_project_economics = "";
var step11_query_cfv_vals = "";
var results_current_page = 1;
var results_total_pages = 0;
var per_page_max = 200;

var tmp_api_response = "tmp_api_response";
var CFVantsStartDate = "673735";
var CFVantsEndDate = "673745";

var CFVETC = "617365";
var CFVEAC = "558675"
var revDate = "385795";
var CFVrecordedValue = "385805";
var CFVrevStatus = "616895";
var CFVrevHoursatCompletion = "622025";
var CFVConfirmedCompletionDate = "601125";
var CFVrevTotalProjectPercentComplete = "673825";
var CFV4lastUpdate = "656215";
var CFVWSCompletionDate = "601125";
var CFVOversight = "675235";
// var CFVProjectInvite = "556055"; CFid = Project Framework Form Auto Invite
var CFVProjectInvite = "298195"; // CFid = Setup Form Project Invite
var CFVProjectInviteChoiceDisplayValue = "Yes";

function gridDateFormat(date) {
  var formatDate = date;
  if (formatDate.length == 11) {
    formatDate = formatDate.slice(7);
  } else if (formatDate.length == 12) {
    formatDate = formatDate.slice(8);
  }
  if (date.slice(0, 3) == "Jan") {
    formatDate += "-01-";
  } else if (date.slice(0, 3) == "Feb") {
    formatDate += "-02-";
  } else if (date.slice(0, 3) == "Mar") {
    formatDate += "-03-";
  } else if (date.slice(0, 3) == "Apr") {
    formatDate += "-04-";
  } else if (date.slice(0, 3) == "May") {
    formatDate += "-05-";
  } else if (date.slice(0, 3) == "Jun") {
    formatDate += "-06-";
  } else if (date.slice(0, 3) == "Jul") {
    formatDate += "-07-";
  } else if (date.slice(0, 3) == "Aug") {
    formatDate += "-08-";

  } else if (date.slice(0, 3) == "Sep") {
    formatDate += "-09-";
  } else if (date.slice(0, 3) == "Oct") {
    formatDate += "-10-";
  } else if (date.slice(0, 3) == "Nov") {
    formatDate += "-11-";
  } else if (date.slice(0, 3) == "Dec") {
    formatDate += "-12-";
  }
  if (date.length == 11) {
    formatDate += 0 + date.slice(4, 5);
  } else if (date.length == 12) {
    formatDate += date.slice(4, 6);
  }
  return formatDate;
}








function createRequestPayloads() {
  var tempDate = new Date();
  var date;
  var numOfTasksInFirstGrid = dhtmlx_grid_dhtmlx_grid0.getRowsNum();
  var tmpMonthDate = tempDate.getMonth()+1;
  if (tmpMonthDate < 10) {
    tmpMonthDate = "0" + tmpMonthDate;
  }
  var tmpDayDate = tempDate.getDate();
  if (tmpDayDate < 10) {
    tmpDayDate = "0" + tmpDayDate;
  }
  var dateforCFV; 
  dateforCFV = tempDate.getFullYear() + "-" + tmpMonthDate + "-" + tmpDayDate;
  var nextDate = tempDate.getFullYear() + "-" + tmpMonthDate + "-" + (Number(tmpDayDate)+Number(1));

  if(counterforwscomplete%2==1){
    deleteCompletionAllocation = [];
    updateCompletionAllocation = [];
   updateCompletion = [];


  var idsToBeCompleted = [];
  var storyForPrivatePost;
  var gltaskk;
  
  var numOfCompleteWorkstreams = dhtmlx_grid_dhtmlx_grid2.getRowsNum();
  
  createStoryRequests = [];
  updateStatus = [];
  completeTasks = [];
  publicPost = [];
  privatePost = [];
  var arrayofIDS = new Array(numOfCompleteWorkstreams);
  var validWorkstreamIDS = [];

  for (var j = 0; j < numOfCompleteWorkstreams; j++) {
    arrayofIDS[j] = Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[j + 1].holder;
  }
  for (var z = 0; z < arrayofIDS.length; z++) {
    for (var a = 0; a < fullTaskCFV.data.count; a++) {
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].custom_field_id == 624595) {
        if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].subject_id == arrayofIDS[z]) {
          validWorkstreamIDS.push(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].value);
        }
      }
    }
  }
  var arrayofallCFV = [];
  var arrayofWIDCFV = [];
  for (var m = 0; m < actualHoursJSON.data.count; m++) {
    for (var n = 0; n < actualHoursJSON.data.stories[actualHoursJSON.data.results[m].id].custom_field_value_ids.length; n++) {
      arrayofallCFV.push(actualHoursJSON.data.stories[actualHoursJSON.data.results[m].id].custom_field_value_ids[n]);
    }
  }
  for (var l = 0; l < arrayofallCFV.length; l++) {
    if (actualHoursJSON.data.custom_field_values[arrayofallCFV[l]].custom_field_id == 624595) {
      arrayofWIDCFV.push(actualHoursJSON.data.custom_field_values[arrayofallCFV[l]].id);
    }
  }
  for (var b = 0; b < validWorkstreamIDS.length; b++) {
    for (var y = 0; y < arrayofWIDCFV.length; y++) {
      if (validWorkstreamIDS[b] == actualHoursJSON.data.custom_field_values[arrayofWIDCFV[y]].value) {
        idsToBeCompleted.push(actualHoursJSON.data.custom_field_values[arrayofWIDCFV[y]].subject_id);
      }
    }

  }
  for (var x = 0; x < fullTaskCFV.data.count; x++) {
    if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].custom_field_id == 622925) {
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].display_value == "Yes")
        for (var c = 0; c < numOfCompleteWorkstreams; c++) {
          //gets all workstram parent fields that are associated to any values in second grid
          if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[c + 1].holder == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].subject_id) {
            for (var d = 0; d < actualHoursJSON.data.count; d++) {
              if (actualHoursJSON.data.stories[actualHoursJSON.data.results[d].id].parent_id == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].subject_id) {
                idsToBeCompleted.push(actualHoursJSON.data.stories[actualHoursJSON.data.results[d].id].id);
              }
            }
          }
        }
    }
  }

  for (var i = 0; i < numOfCompleteWorkstreams; i++) {
    //match allocations to story
    //Grabs custom field values on tasks
    for (var a = 0; a < fullTaskCFV.data.count; a++) {
      //Sorts for just workstream ID
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].custom_field_id == 624595) {
        if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[i + 1].holder == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].subject_id)
          //Goes through last values in results which should be workspace allocation ids
          for (var l = allocationCounting; l < allocationHours.data.results.length; l++) {
            //goes through all all allocation resources
            for (var m = 0; m < allocationResource.data.count; m++) {
              //if workspace allocation id is equal to the subject id of the allocation resource
              if (allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].workspace_resource_id == allocationResource.data.custom_field_values[allocationResource.data.results[m].id].subject_id) {
                //if the custom field value (The actual workstream id) is equal to the custom field value on the task
                if (allocationResource.data.custom_field_values[allocationResource.data.results[m].id].value == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].value) {
                  // allocationHourInGridVal=allocationHourInGridVal+allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].minutes;
                  resourcesToBeUpdated.push(allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].id);
                  resourceRelatedStoryId.push(gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[i + 1].workstream_completion_date));

                }
              }
            }
          }
      }
    }
  }




  var counterCheckk2 = 0;
  var budgetInStory;
  var rev8Hours;
  var storyPercentageComplete;
  var workspaceIDForPost;
  var PrivatePostAttach;
  var PublicPostAttach;
  for (var k = 0; k < numOfCompleteWorkstreams; k++) {
    for (var j = 0; j < apiGridCall.data.count; j++) {
      if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder == apiGridCall.data.results[j].id) {
        if (apiGridCall.data.stories[apiGridCall.data.results[j].id].budget_estimate_in_cents == null) {
          budgetInStory = 0
        } else {
          budgetInStory = apiGridCall.data.stories[apiGridCall.data.results[j].id].budget_estimate_in_cents;
          budgetInStory = budgetInStory;
        }
        storyPercentageComplete = apiGridCall.data.stories[apiGridCall.data.results[j].id].percentage_complete * 100;
        workspaceIDForPost = apiGridCall.data.stories[apiGridCall.data.results[j].id].workspace_id;
      }
    }
    for (var l = 0; l < numOfTasksInFirstGrid; l++) {
      if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder == Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[l + 1].holder) {
        rev8Hours = (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[l + 1].workstream_actual_hours) * 100;
        rev8Hours = Math.trunc(rev8Hours);
        rev8Hours = Math.abs(rev8Hours);

      }
    }
    createStoryRequests.push({
      ["CFVGridRevDate" + k]: {
        subject_type: "story",
        subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        custom_field_id: revDate,
        value: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].workstream_completion_date)
      }
    });
    createStoryRequests.push({
      ["CFVGridBudget" + k]: {
        subject_type: "story",
        subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        custom_field_id: CFVrecordedValue,
        value: [budgetInStory, "USD"]

      }
    });

    createStoryRequests.push({
      ["CFVGridRevStatus_int" + k]: {
        subject_type: "story",
        subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        custom_field_id: CFVrevHoursatCompletion,
        value: [rev8Hours, "USD"]
      }
    });
    createStoryRequests.push({
      ["CFVGridRevForecastValue_int" + k]: {
        subject_type: "story",
        subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        custom_field_id: CFVConfirmedCompletionDate,
        value: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].workstream_completion_date)
      }
    });
    counterCheckk2 = updateCompletion.length;
    for(var jgg = 0;jgg<cfvVals.data.count;jgg++){
     if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k+1].holder){
       if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].custom_field_id==673825){
         updateCompletion.push({
           ["CFVPercCompCompletion"+k]:{
             id:cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].id,
             value:[10000, "USD"]
           }
 
         }); 
       }
     }
   }
       if(counterCheckk2==updateCompletion.length){
    createStoryRequests.push({
      ["CFVGridRevMethod_int" + k]: {
        subject_type: "story",
        subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        custom_field_id: CFVrevTotalProjectPercentComplete,
        value: [10000, "USD"]
      }
    });
   }
   //  createStoryRequests.push({
   //    ["CFVGridUpdatedDate" + k]: {
   //      subject_type: "story",
   //      subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
   //      custom_field_id: CFV4lastUpdate,
   //      value: dateforCFV
   //    }
   //  });


    if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].upload_attachments2=="[222]"){
        PrivatePostAttach = "[]";
    }
    else{
    PrivatePostAttach = (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].upload_attachments2);
    }
    if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].upload_attachments=="[111]"){
        PublicPostAttach = "[]";

    }
    else{
    PublicPostAttach = Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].upload_attachments;
    }

    if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626895") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].custom_post,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)


      });
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626905") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": TechServiceClose,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)

      });
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626915") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": TechServiceOpen,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)

      });
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626925") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": EnterpriseCustomSOW,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)

      });
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626935") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": MavenOpsMid,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)

      });
   
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2655555") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": MavenOpsLastOpen,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)

      });
    } else if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].closure_type == "2626945") {
      publicPost.push({
        "workspace_id": workspaceIDForPost,
        "message": MavenOpsLastClose,
        "story_id": Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder,
        "attachment_ids": JSON.parse(PublicPostAttach)
      });
    }
    for(var xa = 0; xa<PETasks.data.count;xa++){
      if (PETasks.data.stories[PETasks.data.results[xa].id].title == "Project Economics"){
        if(PETasks.data.stories[PETasks.data.results[xa].id].workspace_id == workspaceIDForPost){
          storyForPrivatePost = PETasks.data.results[xa].id;
        }
      }
    }
    for (var xb = 0;xb<glTaskCFV.data.count;xb++){
      if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[k + 1].holder == glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xb].id].subject_id){
        gltaskk = glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xb].id].display_value;
      }
    }
    privatePost.push({
      "workspace_id": workspaceIDForPost,
      "message": "(" + gltaskk + ")" + " This service has been delivered and revenue will now be recognized.",
      "story_id": storyForPrivatePost,
      "recipient_ids": privatePostUserIds,
      "attachment_ids": JSON.parse(PrivatePostAttach)
    });
  }

  //createStoryRequests = createStoryRequests.reverse();
  $("#param2")[0].value = JSON.stringify(createStoryRequests);
  $("#param22")[0].value = JSON.stringify(updateCompletion);

  //$("#param3")[0].value = JSON.stringify(updateStatus);
  //  $("#param4")[0].value = JSON.stringify(completeTasks);
  //$("#param5")[0].value = JSON.stringify(publicPost);
  //$("#param6")[0].value = JSON.stringify(privatePost);


  //create publicPost using clientwebrequests

  // {
  //   'mavenlink_object': "posts",
  //   'request_action': "post",
  //   'request_data': {"posts":[{"workspace_id": 30607865, "message":'1'},{"workspace_id": 30607865, "message":'2'}]},
  //   'client_response_store_id': "param2",
  //   'ui_data_attribute': "value"
  // }

  //updating rev status
  var updatingCFVVals = [];
  for (var u = 0; u < numOfCompleteWorkstreams; u++) {
    //updatingCFVVals.push(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[u+1].holder);
    for (var v = 0; v < customvalls.data.count; v++) {
      if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid2")[u + 1].holder == customvalls.data.custom_field_values[customvalls.data.results[v].id].subject_id) {
        updatingCFVVals.push(customvalls.data.results[v].id)
      }

    }
  }
  for (var w = 0; w < updatingCFVVals.length; w++) {
    Utils.clientWebRequests({
      'mavenlink_object': "custom_field_values",
      'request_action': "put",
      'object_id': updatingCFVVals[w],
      'request_data': { "custom_field_value": { "value": [2546495] } },
      'client_response_store_id': tmp_api_response,
      'ui_data_attribute': "value"
    })
  }
  for (var q = 0; q < idsToBeCompleted.length; q++) {
    Utils.clientWebRequests({
      'mavenlink_object': "stories",
      'request_action': "put",
      'object_id': idsToBeCompleted[q],
      'request_data': { "story": { "state": "completed" } },
      'client_response_store_id': tmp_api_response,
      'ui_data_attribute': "value"
    })
  }

  //create private post
  Utils.clientWebRequests({
    'mavenlink_object': "posts",
    'request_action': "post",
    'request_data': { "posts": privatePost },
    'client_response_store_id': tmp_api_response,
    'ui_data_attribute': "value"

  })
  Utils.clientWebRequests({
    'mavenlink_object': "posts",
    'request_action': "post",
    'request_data': { "posts": publicPost },
    'client_response_store_id': tmp_api_response,
    'ui_data_attribute': "value"

  })


  for (var f = 0; f < resourcesToBeUpdated.length; f++) {
    if (allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].start_date > resourceRelatedStoryId[f]) {
      //delete allocation
      // deleteCompletionAllocation.push({
      //     ["CompAllocationDelete"+f]:{
      //      mavenlink_object: "workspace_allocations",
      //      id:allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].id
      //     }
      // });
      Utils.clientWebRequests({
        'mavenlink_object': "workspace_allocations",
        'request_action': "delete",
        'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].id,
        'client_response_store_id': tmp_api_response,
        'ui_data_attribute': "value"
      })
    } else if (allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].end_date > resourceRelatedStoryId[f]) {
      //update end date of current allocation to todays date
      updateCompletionAllocation.push({
          ["CompAllocationUpdate"+f]:{
           id:allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].id,
           end_date: resourceRelatedStoryId[f]
          }

      });
   //    Utils.clientWebRequests({
   //      'mavenlink_object': "workspace_allocations",
   //      'request_action': "put",
   //      'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdated[f]].id,
   //      'request_data': { "workspace_allocation": { "end_date": resourceRelatedStoryId[f] } },
   //      'client_response_store_id': tmp_api_response,
   //      'ui_data_attribute': "value"
   //    })
    }
  }
  $("#param31")[0].value = JSON.stringify(deleteCompletionAllocation);
  $("#param32")[0].value = JSON.stringify(updateCompletionAllocation);
}
if(counterforwsupdate%2==1){
  createUpdateRequest = [];
  createUpdateRequestUpdateScenario = [];

  createUpdateRequestForPending =[];
  createUpdateRequestForPendingUpdateScenario = [];

  var numOfUpdatedWorkstreams = dhtmlx_grid_dhtmlx_grid1.getRowsNum();

  
  for (var xji = 0; xji < numOfUpdatedWorkstreams; xji++) {
  

    //match allocations to story
    //Grabs custom field values on tasks
    for (var xja = 0; xja < fullTaskCFV.data.count; xja++) {
      for (var xjq = 0;xjq<glTaskCFV.data.count;xjq++){
      //Sorts for just workstream ID
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].custom_field_id == 624595) {
        if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xji + 1].holder == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].subject_id){
          if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xji + 1].holder==glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xjq].id].subject_id){
            if(glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xjq].id].value[0]==765255||glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xjq].id].value[0]==765265||glTaskCFV.data.custom_field_values[glTaskCFV.data.results[xjq].id].value[0]==765245){

          //Goes through last values in results which should be workspace allocation ids
          for (var xjl = allocationCounting; xjl < allocationHours.data.results.length; xjl++) {
            //goes through all all allocation resources
            for (var xjm = 0; xjm < allocationResource.data.count; xjm++) {
              //if workspace allocation id is equal to the subject id of the allocation resource
              if (allocationHours.data.workspace_allocations[allocationHours.data.results[xjl].id].workspace_resource_id == allocationResource.data.custom_field_values[allocationResource.data.results[xjm].id].subject_id) {
                //if the custom field value (The actual workstream id) is equal to the custom field value on the task
                if (allocationResource.data.custom_field_values[allocationResource.data.results[xjm].id].value == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].value) {
                  // allocationHourInGridVal=allocationHourInGridVal+allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].minutes;
                  resourcesToBeUpdatedForUpdateForMavenOps.push(allocationHours.data.workspace_allocations[allocationHours.data.results[xjl].id].id);
                  resourceWorkspaceIDMatchMavenOps.push(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].subject_id);
                }
              }
            }
          }
        }
        else{
          for (var xjl = allocationCounting; xjl < allocationHours.data.results.length; xjl++) {
            //goes through all all allocation resources
            for (var xjm = 0; xjm < allocationResource.data.count; xjm++) {
              //if workspace allocation id is equal to the subject id of the allocation resource
              if (allocationHours.data.workspace_allocations[allocationHours.data.results[xjl].id].workspace_resource_id == allocationResource.data.custom_field_values[allocationResource.data.results[xjm].id].subject_id) {
                //if the custom field value (The actual workstream id) is equal to the custom field value on the task
                if (allocationResource.data.custom_field_values[allocationResource.data.results[xjm].id].value == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].value) {
                  // allocationHourInGridVal=allocationHourInGridVal+allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].minutes;
                  resourcesToBeUpdatedForUpdateForTS.push(allocationHours.data.workspace_allocations[allocationHours.data.results[xjl].id].id);
                  resourceWorkspaceIDMatchTS.push(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xja].id].subject_id);
                }
              }
            }
          }
        }
        }
        }
      }
    }
    }
  }



  
  var counterCheck=0;
for(var ja=0; ja<numOfUpdatedWorkstreams;ja++){
    var wsIDforEAC = 0;
    var EACCFVVal = 0;
    var arrayForEAC = [];
    var arrayforEACWS = [];
    var currentWsId = 0;
      for(xjx = 0;xjx< numOfTasksInFirstGrid;xjx++){
          if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja + 1].holder==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[xjx + 1].holder){
            EACCFVVal = Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[xjx + 1].workstream_actual_hours;
            currentWsId =allStoryData.data.stories[Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[xjx + 1].holder].workspace_id;
          }
        }
        EACCFVVal = Number.parseFloat(EACCFVVal).toFixed(0);
    for(var jax = 0; jax<arrayofCFVForActHour.length; jax++){   //Loops through all custom fields
        if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jax]].custom_field_id=="624595"){ //If custom Field ID is Workstream ID
            if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jax]].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder){  //If Subject id is equal to story id
                wsIDforEAC = allStoryData.data.custom_field_values[arrayofCFVForActHour[jax]].value;    //Grabs workstream ID
            }
        }
    }
    for(var jaz = 0; jaz<arrayofCFVForActHour.length; jaz++){   //Loops through all custom fields
        if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jaz]].custom_field_id=="624595"){ //If custom Field ID is Workstream ID
            if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jaz]].value == wsIDforEAC){    //If custom field value is equal to ws id
                arrayForEAC.push(allStoryData.data.custom_field_values[arrayofCFVForActHour[jaz]].subject_id);  //Gets array of all stories that have a cfv ws id that matches
            }
        }
    }
    //Unneccesary code???
    for(var jazzz = 0; jazzz<arrayForEAC.length; jazzz++){
        if(allStoryData.data.stories[arrayForEAC[jazzz]].workspace_id == currentWsId){
            arrayforEACWS.push(arrayForEAC[jazzz]);
        }
    }
    for(var jazz = 0; jazz<arrayofCFVForActHour.length; jazz++){    //Loops through all custom fields
        for (var zxc= 0; zxc<arrayforEACWS.length; zxc++){    //Loops through all relevant stories
            if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jazz]].custom_field_id =="617365"){   //if cfv id is ETC hours
            if(allStoryData.data.custom_field_values[arrayofCFVForActHour[jazz]].subject_id==arrayforEACWS[zxc]){
                EACCFVVal = (Number(EACCFVVal) + Number(allStoryData.data.custom_field_values[arrayofCFVForActHour[jazz]].value[0]/100));
            }
            }
        }
    }

  counterCheck=createUpdateRequestUpdateScenario.length;
  for(var jg = 0;jg<cfvVals.data.count;jg++){
    if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder){
      if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].custom_field_id==673745){
        createUpdateRequestUpdateScenario.push({
          ["CFVanEndDate"+ja]:{
            id:cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].id,
            value:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].antic_end_date)
          }

        });
      }
    }
  }
    if(counterCheck==createUpdateRequestUpdateScenario.length){
        createUpdateRequest.push({
          ["CFVAntEndDate"+ja ]:{
            subject_type: "story",
            subject_id:Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder,
            custom_field_id:CFVantsEndDate,
            value:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].antic_end_date)
          }
          
           });
          }


          counterCheck=createUpdateRequestUpdateScenario.length;
          for(var jg = 0;jg<cfvVals.data.count;jg++){
            if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder){
      if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].custom_field_id==673735){
        createUpdateRequestUpdateScenario.push({
          ["CFVanStartDate"+ja]:{
            id:cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].id,
            value:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].antic_start_date)
          }

        }); 
           }
          }
        }
      if(counterCheck==createUpdateRequestUpdateScenario.length){
        createUpdateRequest.push({
          ["CFVAntStartDate"+ja ]:{
            subject_type: "story",
            subject_id:Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder,
            custom_field_id:CFVantsStartDate,
            value:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].antic_start_date)
          }
          
           });
      }


      counterCheck=createUpdateRequestUpdateScenario.length;
          for(var jg = 0;jg<cfvVals.data.count;jg++){
            if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder){
      if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].custom_field_id==CFVETC){
        createUpdateRequestUpdateScenario.push({
          ["CFVETCUpdate"+ja]:{
            id:cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].id,
            value:[(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].exp_hours_comp)*100, "USD"]
          }

        }); 
           }
          }
        }
        if(counterCheck==createUpdateRequestUpdateScenario.length){
        createUpdateRequest.push({
          ["CFVETCSubmission"+ja ]:{
            subject_type: "story",
            subject_id:Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder,
            custom_field_id:CFVETC,
            value: [(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].exp_hours_comp)*100, "USD"]
          }
          
           });
      }

      
      counterCheck=createUpdateRequestUpdateScenario.length;
      for(var jg = 0;jg<cfvVals.data.count;jg++){
        if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder){
  if(cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].custom_field_id==CFVEAC){
    createUpdateRequestUpdateScenario.push({
      ["CFVEACUpdate"+ja]:{
        id:cfvVals.data.custom_field_values[cfvVals.data.results[jg].id].id,
        value:EACCFVVal
      }

    }); 
       }
      }
    }
    if(counterCheck==createUpdateRequestUpdateScenario.length){
    createUpdateRequest.push({
      ["CFVEACSubmission"+ja ]:{
        subject_type: "story",
        subject_id:Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ja+1].holder,
        custom_field_id:CFVEAC,
        value: EACCFVVal
      }
      
       });
  }
    

  
   
}
$("#param3")[0].value = JSON.stringify(createUpdateRequest);
$("#param5")[0].value =JSON.stringify(createUpdateRequestUpdateScenario);
//Seperating Pending Workstreams and (Story and Allocation Updates only)
var counterCheck2 = 0;
  for(var jc = 0; jc < idk.data.count; jc++) {
    for(var jb = 0;jb<numOfUpdatedWorkstreams;jb++){
    if (idk.data.custom_field_values[idk.data.results[jc].id].subject_id  ==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb + 1].holder)
    {
      if(idk.data.custom_field_values[idk.data.results[jc].id].value[0] ==2566445){
        var percentCompleteForCFVofUpdate;
          for (var je = 0; je < apiGridCall.data.count; je++) {
            if (Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb + 1].holder == apiGridCall.data.results[je].id) {
              percentCompleteForCFVofUpdate = apiGridCall.data.stories[apiGridCall.data.results[je].id].percentage_complete * 100;
            }
          }
          var revDateFCSTStoryID;
          for (var jf=0; jf<fullTaskCFV.data.count;jf++){
          if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jf].id].custom_field_id == "624595"){
            if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jf].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb+1].holder){
              revDateFCSTStoryID = fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jf].id].value;
            }

          }
        }

        counterCheck2 = createUpdateRequestForPendingUpdateScenario.length;
        for(var jgg = 0;jgg<cfvVals.data.count;jgg++){
          if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb+1].holder){
            if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].custom_field_id==673825){
              createUpdateRequestForPendingUpdateScenario.push({
                ["CFVPercComp"+jb]:{
                  id:cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].id,
                  value:[percentCompleteForCFVofUpdate, "USD"]
                }
      
              }); 
            }
          }
        }
            if(counterCheck2==createUpdateRequestForPendingUpdateScenario.length){
          createUpdateRequestForPending.push({
            ["CFVPercentComplet"+jb]:{
              subject_type: "story",
              subject_id:Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb+1].holder,
              custom_field_id:CFVrevTotalProjectPercentComplete,
              value:[percentCompleteForCFVofUpdate, "USD"]
            }

          });
        }
        counterCheck2 = createUpdateRequestForPendingUpdateScenario.length;
        for(var jgg = 0;jgg<cfvVals.data.count;jgg++){
          if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].subject_id==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb+1].holder){
        if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].custom_field_id==656215){
          createUpdateRequestForPendingUpdateScenario.push({
            ["CFVLastUpdate"+jb]:{
              id:cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].id,
              value:dateforCFV
            }
  
          }); 
        }
      }
    }
   }
    if(counterCheck2==createUpdateRequestForPendingUpdateScenario.length){

          createUpdateRequestForPending.push({
            ["CFVLastUpdateDate"+jb]:{
              subject_type: "story",
              subject_id: Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jb+1].holder,
              custom_field_id: CFV4lastUpdate,
              value: dateforCFV
            }
          });
         }
      }
    }
  }
 for(var jbbb = 0;jbbb<numOfUpdatedWorkstreams;jbbb++){
  for(var jgg = 0;jgg<cfvVals.data.count;jgg++){
    for(var jgh=0;jgh<fullTaskCFV.data.count;jgh++){
      if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jgh].id].custom_field_id==624595){
        if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jbbb+1].holder==fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jgh].id].subject_id){
          if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[jgh].id].value==cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].subject_id){
      if(cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].custom_field_id==385795){   
      createUpdateRequestForPendingUpdateScenario.push({
        ["CFVRevFCSTDate"+jbbb]:{
          id: cfvVals.data.custom_field_values[cfvVals.data.results[jgg].id].id,
          value:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[jbbb+1].antic_end_date)
        }
      });
    }
  }
}
}
}
}
}
$("#param4")[0].value = JSON.stringify(createUpdateRequestForPending);
$("#param6")[0].value = JSON.stringify(createUpdateRequestForPendingUpdateScenario);

deleteWorkspaceAllocation =[];
updateWorkspaceAllocation =[];
createWorkspaceAllocation = [];

//for (var jz = 0;jz<numOfUpdatedWorkstreams;jz++){
//This is for Technical Service Allocations
for (var xjf = 0; xjf < resourcesToBeUpdatedForUpdateForTS.length; xjf++) {
  var moveornot = 0;
  
  //if (allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].start_date > dateforCFV) {
    //delete allocation
//     deleteWorkspaceAllocation.push({
//     ["WSAllocationDelete"+xjf ]:{
//      mavenlink_object: "workspace_allocations",
//      id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id
//    }
//  });



  //   Utils.clientWebRequests({
  //     'mavenlink_object': "workspace_allocations",
  //     'request_action': "delete",
  //     'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
  //     'client_response_store_id': tmp_api_response,
  //     'ui_data_attribute': "value"
  //   })
  // }
  //else if(allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].end_date<dateforCFV){

  //}
  //else if (allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].end_date > dateforCFV) {
    //update end date of current allocation to todays date


   //  Utils.clientWebRequests({
   //    'mavenlink_object': "workspace_allocations",
   //    'request_action': "put",
   //    'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
   //    'request_data': { "workspace_allocation": { "end_date": dateforCFV } },
   //    'client_response_store_id': tmp_api_response,
   //    'ui_data_attribute': "value"
   //  })
    
  //}
  for (var xjb = 0;xjb<numOfUpdatedWorkstreams;xjb++){
    if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].holder==resourceWorkspaceIDMatchTS[xjf]){
      if(allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].end_date < dateforCFV||gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date)>dateforCFV||gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date)<dateforCFV || allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].start_date > dateforCFV){

        moveornot++;
        updateWorkspaceAllocation.push({
          ["WSAllocationUpdateTSPD"+xjf ]:{
            id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
            start_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date),
            end_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date),
            minutes: (Number(gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].exp_hours_comp))*60)
          }
       
         })
      }
      


      else{
     updateWorkspaceAllocation.push({
       ["WSAllocationUpdateTSSD"+xjf ]:{
         id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
         start_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date)
       }
 
      })


     //  Utils.clientWebRequests({
     //    'mavenlink_object': "workspace_allocations",
     //    'request_action': "put",
     //    'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
     //    'request_data': { "workspace_allocation": { "start_date": gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date)  } },
     //    'client_response_store_id': tmp_api_response,
     //    'ui_data_attribute': "value"
     //  })
     


     createWorkspaceAllocation.push({
       ["WSAllocationCreate"+xjf ]:{
         resource_id: allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].workspace_resource_id,
         start_date: nextDate,
         end_date:gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date),
         minutes: (Number(gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].exp_hours_comp))*60),
         hard: true
       }
 
      })
    }


     //  Utils.clientWebRequests({
     //    'mavenlink_object': "workspace_allocations",
     //    'request_action': "post",
     //    'request_data': { "workspace_allocation": { "resource_id": allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].workspace_resource_id, "start_date": nextDate, "end_date":gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date), "minutes": (Number(gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].exp_hours_comp))*60)  } },
     //    'client_response_store_id': tmp_api_response,
     //    'ui_data_attribute': "value"
     //  })

    }
  }
    if(allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].end_date > dateforCFV){
      if(moveornot == 0 ){
      updateWorkspaceAllocation.push({
       ["WSAllocationUpdateTSED"+xjf ]:{
         id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForTS[xjf]].id,
         end_date: dateforCFV
       }
  
      })
    }
     }



}


//This is for MavenOPs Allocations


for(var xjh=0;xjh<resourcesToBeUpdatedForUpdateForMavenOps.length;xjh++){
for (var xjb = 0;xjb<numOfUpdatedWorkstreams;xjb++){
  if(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].holder==resourceWorkspaceIDMatchMavenOps[xjh]){
  /*
  This is how the Mavenops update Allocations used to update the dates for the Allocations
   updateWorkspaceAllocation.push({
     ["WSAllocationUpdateMOED"+xjh ]:{
       id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForMavenOps[xjh]].id,
       end_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date)
     }

    })
    updateWorkspaceAllocation.push({
      ["WSAllocationUpdateMOSD"+xjf ]:{
        id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForMavenOps[xjh]].id,
        start_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date)
      }
   
     })
     */

     //New Way to update MavenOps Allocations It will update both Start Date and End Date at the same time

     updateWorkspaceAllocation.push({
      ["WSAllocationUpdateMOSD"+xjf ]:{
        id:allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForMavenOps[xjh]].id,
        start_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date),
        end_date: gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date)
      }
   
     })




  
 //   Utils.clientWebRequests({
 //    'mavenlink_object': "workspace_allocations",
 //    'request_action': "put",
 //    'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForMavenOps[xjh]].id,
 //    'request_data': { "workspace_allocation": { "end_date": gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_end_date) } },
 //    'client_response_store_id': tmp_api_response,
 //    'ui_data_attribute': "value"
 //  })


 

 //  Utils.clientWebRequests({
 //    'mavenlink_object': "workspace_allocations",
 //    'request_action': "put",
 //    'object_id': allocationHours.data.workspace_allocations[resourcesToBeUpdatedForUpdateForMavenOps[xjh]].id,
 //    'request_data': { "workspace_allocation": { "start_date": gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[xjb + 1].antic_start_date)  } },
 //    'client_response_store_id': tmp_api_response,
 //    'ui_data_attribute': "value"
 //  })
}
}
}
$("#param7")[0].value = JSON.stringify(deleteWorkspaceAllocation);
$("#param8")[0].value = JSON.stringify(updateWorkspaceAllocation);
$("#param9")[0].value = JSON.stringify(createWorkspaceAllocation);




//}
}
//$("#ajax_submit-workspace_update_group_id").prop("disabled",true);



}

function createGetAPIQuery(mlObject, hiddenElementId, queryOptions, async) {
  var query = {
    mavenlink_object: mlObject,
    request_action: "get",
    client_response_store_id: hiddenElementId,
    ui_data_attribute: "value",
    endpoint_options: queryOptions
  };
  if (async) {
    query["async"] = async;
    query["channel_session_id"] = tmpSessionId;
    query["channel_cf_id"] = "12";
  }

  return query;
}

function getUserIdsForPrivatePost() {
  step2num = 8;

  var queryOptions = {
    subject_type: "user",
    with_custom_field_id: CFVProjectInvite
  };

  step8_query_project_auto_invite_values = createGetAPIQuery("custom_field_values", step8_project_auto_invite_values, queryOptions, true);

  Utils.clientWebRequests(step8_query_project_auto_invite_values);
}
 function progressbar_update(progressbar_id, progress_percent, progress_percent_label, processed_step = {}) {
    var tooltip_text = "";

    $("#" + progressbar_element_id + "_alert").show();

    if (processed_step["tooltip"]) {
        tooltip_text = processed_step["tooltip"];
    } else {
        // UTC time - 7 hrs for PST
        tooltip_text = (new Date()).toISOString().slice(0, 19).replace("T", " ") + " UTC";

        // local time
        // var now = new Date();
        // var offsetMs = now.getTimezoneOffset() * 60 * 1000;
        // var dateLocal = new Date(now.getTime() - offsetMs);
        // var time_now = dateLocal.toISOString().slice(0, 19).replace("T", " ");
    }

    var id_prefix = progressbar_id + "_";

    $("#" + id_prefix + "main").text(progress_percent_label);
    $("#" + id_prefix + "main").attr("style", "width: " + progress_percent + "%");
    $("#" + id_prefix + "main").attr("aria-valuenow", progress_percent);

    if (Object.keys(processed_step).length != 0) {
        var processed_step_html = `<span id="${processed_step["id"]}" class="label label-success" data-toggle="tooltip" data-placement="bottom" title="${tooltip_text}">${processed_step["label"]}</span>\n`;

        $("#" + id_prefix + "footer").append(processed_step_html);
    }

    $('[data-toggle="tooltip"]').tooltip();
};


function progressbar_clear(progressbar_id) {
   var id_prefix = progressbar_id + "_";

   $("#" + id_prefix + "main").text("");
   $("#" + id_prefix + "main").attr("style", "width: 0%");
   $("#" + id_prefix + "main").attr("aria-valuenow", 0);

   $("#" + id_prefix + "footer").html(`<p id="${id_prefix}footer_name">PROCESSED:</p>`);
};

function setup_progressbar(pbar_id, title) {
 var progressbar_html = `<div id="${pbar_id}_alert" style="display: none; width: auto; padding: 30px; margin-top: 100px; z-index: 1000; position: fixed;" class="alert alert-info alert-dismissible alert-trim">
               <button id="${pbar_id}_btn" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
               <div id="${pbar_id}_row" class="row">
                       <div id="${pbar_id}" class="panel panel-default">
                           <div class="panel-heading">
                               <h3 class="panel-title" id="p_title">${title}</h3>
                           </div>
                           <div class="panel-body">
                               <div class="progress">
                                   <div id="${pbar_id}_main" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                       0%
                                   </div>
                               </div>
                           </div>
                           <div class="panel-footer" id="${pbar_id}_footer">
                               <p id="${pbar_id}_footer_name">PROCESSED:</p>
                           </div>
                       </div>
               </div>
             </div>`;

   $(".custom-form-container").prepend(progressbar_html);
}




$(document).ready(function() {
 $("#ajax_submit-workspace_update_group_id").prop("disabled",true)
  $("#form_group_dhtmlx_grid1").hide();
  $("#update_info_header_id").hide();
  $("#form_group_dhtmlx_grid2").hide();
  $("#complete_info_header_id").hide();

  $('#form_group_' + step0_user_workstream).append('<input type="hidden" id="' + tmp_api_response + '" name="' + tmp_api_response + '" value="" />');

  $('#form_group_' + step0_user_workstream).append('<input type="hidden" id="' + step8_project_auto_invite_values + '" name="' + step8_project_auto_invite_values + '" value="" />');
  setup_progressbar(progressbar_element_id, "Page Startup Progress");

  const protocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  const cable = ActionCable.createConsumer(protocol + window.location.hostname + ":" + window.location.port + "/cable");

  cable.subscriptions.create({
    channel: "ReactRequestsChannel",
    session_id: tmpSessionId,
    cf_id: "12",
  }, {
    connected: () => {
      if(firstConnectedOnly==0){
        firstConnectedOnly++;
      console.log("connected");
      var message = "Retrieving User Data...";
      showAlertMessage(message, "alert-info", false);

      // var queryOptions = {
      //   subject_type: "story",
      //   with_custom_field_id:cfId_workstream_owner
      // };
      step0_query_user_workstream = createGetAPIQuery("users/me", step0_user_workstream, {}, true);
      Utils.clientWebRequests(step0_query_user_workstream);
      }
      else{
        var message = "Refresh page if data has not been pulled correctly";
        showAlertMessage(message, "alert-info", false);
      }
    },
    disconnected: () => {
      console.log("disconnected")
    },
    received: (data) => {
      var responseKeys = Object.keys(data.data);
      console.log("Received Data: "+ JSON.stringify(data));
      

      // no IDs are sent back thus using results to determine where to trigger the change event
      if (responseKeys.includes("users")) {
        getAllAPIResults(step0_query_user_workstream, data, step0_user_workstream);
      } else if (responseKeys.includes("stories")) {
        if (stepNumberCounter == 0) {
          getAllAPIResults(step4_query_api_add_data, data, step4_api_add_data);
          // stepNumberCounter=1;
        } else if (stepNumberCounter == 1) {
          getAllAPIResults(step45_query_all_project_data, data, step45_all_project_data);

        } else if (stepNumberCounter == 2) {
          getAllAPIResults(step5_query_api_actual_hours, data, step5_api_actual_hours);

        }
        else if(stepNumberCounter == 3){
          getAllAPIResults(step9_query_project_economics,data, step9_project_economics);
        }
      } else if (responseKeys.includes("workspaces")) {
        getAllAPIResults(step1_query_api_workspaces, data, step1_api_workspaces);
      } else if (responseKeys.includes("custom_field_values")) {
        if (step2num == 1) {
            if(data.data.count==0){
                step2num = 2;
                var queryOptions = {
                  subject_type: "story",
                  with_custom_field_id: cfId_workstream_owner
                  //with_subject_id: "541429495,541429505,541429515,541429615,541429695,548106945"
                };
            
                // set progressbar to 100%
                progressbar_update(progressbar_element_id,100, '100%');
            
                var message = "User Initialization completed. Preparing Workstreams...";
                showAlertMessage(message, "alert-info", false);
            
                // close progressbar
                $( "#" + progressbar_element_id + "_main" ).removeClass( "active" );
                $( "#" + progressbar_element_id + "_alert" ).fadeTo(200, 500).slideUp(500, function(){
                  $( "#" + progressbar_element_id + "_alert" ).slideUp(1000);
                });    
            
                step2_query_api_workstream_owner = createGetAPIQuery("custom_field_values", step2_api_workstream_owner, queryOptions, true);
                Utils.clientWebRequests(step2_query_api_workstream_owner);
                
              }
              else{
          getAllAPIResults(step1_query_api_cfv_oversight, data, step1_api_cfv_oversight, true);
          //step2num=2;
              }

        } else if (step2num == 2) {
            
          getAllAPIResults(step2_query_api_workstream_owner, data, step2_api_workstream_owner, true);
          // step2num=3;

        } else if (step2num == 3) {
          getAllAPIResults(step2_query_api_cfv_task, data, step2_api_cfv_task, true);
          // step2num=3;

        } else if (step2num == 4) {
          getAllAPIResults(step2_query_api_gl_task, data, step2_api_gl_task, true);
          // step2num=4;

        } else if (step2num == 5) {
          getAllAPIResults(step3_query_dm_cfv_task, data, step3_dm_cfv_task, true);
          // step2num=5;

        } else if (step2num == 6) {
          getAllAPIResults(step6_query_api_allocation_data_part_1, data, step6_api_allocation_data_part_1, true);
        } else if (step2num == 7) {
          getAllAPIResults(step7_query_cfv_values, data, step7_cfv_values, true);
        } else if (step2num == 8) {
          getAllAPIResults(step8_query_project_auto_invite_values, data, step8_project_auto_invite_values, true);
        }
        else if (step2num==22){
            getAllAPIResults(step22_query_api_workstream_owner_for_oversight, data, step22_api_workstream_owner_for_oversight, true);
        }
        else if (step2num==33){
          getAllAPIResults(step11_query_cfv_vals, data, step11_cfv_vals, true);
      }


      } else if (responseKeys.includes("workspace_allocations")) {
        getAllAPIResults(step6_query_api_allocation_data_part_2, data, step6_api_allocation_data_part_2);

      } else {
        // If results doesn't have the above keys then throw message to user and show data

        showAlertMessage("Data response from websocket (not linked to UI element): " + JSON.stringify(data), "alert-info", false);

      }
    }
  });


  $("#form_group_closure_type").hide();
  $("#form_group_custom_styles").hide();
  $("#form_group_upload_attachments").hide();
  $("#form_group_upload_attachments2").hide();

  // 7 = complete date, 8 = complete check, 9 = close type, 10 = custom post
  // column index starts at 0 like arrays
  var colIndx_complete_date = 2;
  //var colIndx_complete_check = 2;
  var colIndx_close_type = 6;
  var colIndx_custom_post = 7;

  var colIndx_workstream_details = 8;

  var submitForm = $(".workspace_update_group_id")[0];
  $(submitForm).submit(function(event) {
    var errors = $(".dhtmlx_validation_error").length;
    if (errors != 0) {
      event.preventDefault();
      alert("Error: Fix highlighted issues and re-submit.");
      return false;
    }
  });

  // window["dhtmlx_grid_dhtmlx_grid2"].setColumnHidden(0, true);
  window["dhtmlx_grid_dhtmlx_grid1"].enableMultiline(true);
  window["dhtmlx_grid_dhtmlx_grid2"].setStyle("", "border:1px solid #e6eeee;", "", "");
  window["dhtmlx_grid_dhtmlx_grid1"].setStyle("", "border:1px solid #e6eeee;", "", "");
  window["dhtmlx_grid_dhtmlx_grid0"].setStyle("", "border:1px solid #e6eeee;", "", "");
  // window["dhtmlx_grid_dhtmlx_grid0"].setSubGrid(window["dhtmlx_grid_dhtmlx_grid2"], colIndx_workstream_details, 0);

  // validates if 8th column is blank
  // window["dhtmlx_grid_dhtmlx_grid1"].setColValidators(",,,,,,,NotEmpty,,");

  // valid input dates are Feb 5, 2020 and onward
  // var priorCloseDate = $("#prior_close_date_id").val();
  // window["dhtmlx_grid_dhtmlx_grid1"]._grid_calendarA.setSensitiveRange(new Date(priorCloseDate), null);

  // starts at 1: id = 1,2


  //Checking to see if this fixes issue with selecting bottom grid

  // window["dhtmlx_grid_dhtmlx_grid0"].attachEvent("onSelectStateChanged", function(id, indx) {
  //   window["dhtmlx_grid_dhtmlx_grid1"].selectRow(id - 1, false, false, true);
  // });

  // window["dhtmlx_grid_dhtmlx_grid1"].attachEvent("onSelectStateChanged", function(id) {
  //   window["dhtmlx_grid_dhtmlx_grid0"].selectRow(id - 1, false, false, true);
  // });




  // starts at 1: id = 1,2
  // window["dhtmlx_grid_dhtmlx_grid0"].attachEvent("onRowSelect", function(id, indx) {
  //   var gridId = "dhtmlx_grid2";
  //   var gridName = "dhtmlx_grid_" + gridId;

  //   var grid = window[gridName];
  //   var data = JSON.parse($("#hidden_dataset_" + gridId).val());
  //   var rowData = [];
  //   var dataGroup = 2;

  //   if (id == 1) {
  //     for (var i = 0; i < dataGroup; i++)
  //       rowData.push(data[i]);
  //   }
  //   if (id == 2) {
  //     for (var i = dataGroup; i < 5; i++)
  //       rowData.push(data[i]);
  //   }
  //   if (id == 3) {
  //     rowData.push(data[5]);
  //   }
  //   if (id == 4) {
  //     rowData.push(data[6]);
  //   }
  //   if (id == 5) {
  //     rowData.push(data[7]);
  //   }

  //   if ($("#" + gridId)[0].style.display == "block") {
  //     grid.entBox.style.position = "initial";
  //     // grid.entBox.style.top = "-350px";
  //     // grid.entBox.style.left = "700px";
  //     grid.clearAll();
  //     grid.parse({ rows: rowData }, "json");
  //   }
  // });

  // window["dhtmlx_grid_dhtmlx_grid0"].attachEvent("onCheck", function(row, col, state) {
  //   // change for complete check and value isn't checked then reset 3 columns
  //   var grid = window["dhtmlx_grid_dhtmlx_grid0"];
  //   if (state){
  //     var putThisInGrid = [];
  //   for (var i=0; i<apiGridCall.data.count; i++){
  //        var gridData = [];

  //       gridData.push(apiGridCall.data.results[i].id);
  //       gridData.push(jsonWorkspaces.data.workspaces[apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id].title);
  //       gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].title);
  //       gridData.push(undefined);
  //       gridData.push(undefined);
  //       gridData.push(undefined);
  //       gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].start_date);
  //       gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].due_date);
  //       gridData.push(undefined);

  //     var formattedMLData = { id: i + 1, data: gridData };
  //     putThisInGrid.push(formattedMLData);
  //     }
  //     $("#hidden_dataset_dhtmlx_grid0").val(JSON.stringify(putThisInGrid)).trigger("change");

  //   }
  // });
  window["dhtmlx_grid_dhtmlx_grid1"].attachEvent("onCheck", function(row, col, state) {
    // change for complete check and value isn't checked then reset 3 columns
    var grid = window["dhtmlx_grid_dhtmlx_grid1"];
    if (col == colIndx_complete_check) {
      if (state) {
        grid.cells(row, colIndx_complete_date).cell.className = "dhtmlx_validation_error";

        var value_close_type = grid.cellById(row, colIndx_close_type).getValue();
        if (value_close_type == "")
          grid.cells(row, colIndx_close_type).cell.className = "dhtmlx_validation_error";
        else
          grid.cells(row, colIndx_close_type).cell.className = "";
      } else {
        grid.cellById(row, colIndx_complete_date).setValue("");
        grid.cellById(row, colIndx_close_type).setValue("");
        loadGridValueToSelect2("dhtmlx_grid1_closure_type" + row + "_" + colIndx_close_type);
        grid.cellById(row, colIndx_custom_post).setValue("");

        grid.cells(row, colIndx_complete_date).cell.className = "";
        grid.cells(row, colIndx_close_type).cell.className = "";
        grid.cells(row, colIndx_custom_post).cell.className = "";
      }
    }
  });






  function getAllAPIResults(apiQuery, queryResults, elementId, stepIncrement = false) {
    if ((queryResults.data.count) && (queryResults.data.count > 0)) {
      var total = queryResults.data.count;

      // on first iteration of query, calculate total pages
      if (results_total_pages == 0) {
        results_total_pages = Math.ceil(total / per_page_max);
        $("#" + tmp_api_response).val("").trigger("change");
      }

      //results_total_pages = Math.ceil(total / per_page_max);

      if ((results_total_pages > 1) && (results_total_pages > results_current_page)) {
        // loop and request until end
        // append to elementId don't trigger change
        // when done trigger change

        var target = {};
        var target_results = [];

        // only parse if there's data
        if ($("#" + tmp_api_response).val() != "") {
          target = JSON.parse($("#" + tmp_api_response).val());
          target_results = target.data.results;
        }

        target_results = target_results.concat(queryResults.data.results);
        target_results = $.extend(true, [], target_results);

        // jquery hash deep merge
        var merged = $.extend(true, target, queryResults);
        merged.data.results = target_results;

        $("#" + tmp_api_response).val(JSON.stringify(merged)).trigger("change");
        results_current_page++;
        apiQuery.endpoint_options.page = results_current_page;
        Utils.clientWebRequests(apiQuery);
      } else {
        var tmp_store = $("#" + tmp_api_response).val();
        var tmp_data = {};
        var tmp_data_results = [];

        // only parse if there's data
        if (tmp_store != "") {
          tmp_data = JSON.parse($("#" + tmp_api_response).val());
          tmp_data_results = tmp_data.data.results;
        }

        tmp_data_results = tmp_data_results.concat(queryResults.data.results);
        tmp_data_results = $.extend(true, [], tmp_data_results);

        var total_response = $.extend(true, tmp_data, queryResults);
        total_response.data.results = tmp_data_results;

        // reset counters
        results_current_page = 1;
        results_total_pages = 0;
        // only increment when needed
        // if (stepIncrement) {
        //    step2num++;
        // }
        // move tmp data into elementId and trigger change
        $("#" + elementId).val(JSON.stringify(total_response)).trigger("change");
        responseCounter++;

         // log progress
         var progress_percent = Math.round(responseCounter / responseTotal * 100);

         var tooltip_message = (new Date()).toISOString().slice(0, 19).replace("T", " ") + " UTC";

         if(queryResults.data)
           if(queryResults.data.count)
             tooltip_message += " Count: " + queryResults.data.count;
         else
           tooltip_message += " No count returned!";

         progressbar_update(progressbar_element_id,progress_percent, progress_percent + '%',{id:('s_' + elementId),label:elementId,tooltip:tooltip_message});

         if (progress_percent == 100) {
           $( "#" + progressbar_element_id + "_main" ).removeClass( "active" );
           $( "#" + progressbar_element_id + "_alert" ).fadeTo(3000, 500).slideUp(500, function(){
             $( "#" + progressbar_element_id + "_alert" ).slideUp(1000);
           });
         }

      }
    }
    else if(oversightJSON == undefined){
       step2num = 2;
       var queryOptions = {
         subject_type: "story",
         with_custom_field_id: cfId_workstream_owner
         //with_subject_id: "541429495,541429505,541429515,541429615,541429695,548106945"
       };
       step2_query_api_workstream_owner = createGetAPIQuery("custom_field_values", step2_api_workstream_owner, queryOptions, true);
       Utils.clientWebRequests(step2_query_api_workstream_owner);
    }
     else {
      // Throw error on count=0 for query
      showAlertMessage("Error! (getAllAPIResults) Response from websocket: " + JSON.stringify(queryResults), "alert-danger", false);
    }
  }







  function showAlertMessage(
    alertMessage,
    alertType = "alert-info",
    alertCloseTimeout = 10000
  ) {
    var alertHtml =
    '<div style="width: auto; margin-left: 15px; z-index: 1000; position: fixed;" class="alert ' +
    alertType +
    ' alert-dismissible alert-trim"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    alertMessage +
      "</div>";
    $(".global-notifications").html(alertHtml);

    if (alertCloseTimeout) {
      $(".alert-dismissible")
        .fadeTo(alertCloseTimeout, 500)
        .slideUp(500, function() {
          $(".alert-dismissible").alert("close");
        });
    }
  }

  function getJsonValueFromHiddenField(elementId) {
    var element = JSON.parse($("#" + elementId)[0].value);
    return element;
  }

  // -------------------------------------------------------------
  // add code here
  // -------------------------------------------------------------

  //workstreamsBasedOnOwner

  $("#workstreamsToBeUpdated").click(function() {
    var antStar;
    var antEnd;
    counterforwsupdate++;
    if(counterforwsupdate%2==1){
    $("#form_group_dhtmlx_grid1").show();
    $("#update_info_header_id").show();
    $("#ajax_submit-workspace_update_group_id").prop("disabled",false)
    var putThisInGrid = [];
    var numOfWorkS = dhtmlx_grid_dhtmlx_grid0.getRowsNum();
    var l = 0;
    for (var i = 0; i < numOfWorkS; i++) {
      if ((Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].update_workstream) == 1) {
        antStar = "";
        antEnd = "";
        for(var f=0; f<fullTaskCFV.data.count;f++){
          if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].custom_field_id=="673735"){
            if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].subject_id==apiGridCall.data.results[i].id){
              antStar=fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].display_value;
            }
          }
          else if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].custom_field_id=="673745"){
            if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].subject_id==apiGridCall.data.results[i].id){
              antEnd=fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[f].id].display_value;
            }
          }
        }
        l++;
        var gridData = [];

        gridData.push(apiGridCall.data.results[i].id);
        gridData.push(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].project_title+" - "+Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].workstream_name);
        gridData.push(antStar);
        gridData.push(antEnd);
        gridData.push("");

        var formattedMLData = { id: l, data: gridData };
        putThisInGrid.push(formattedMLData);
        
      }
    }
    $("#hidden_dataset_dhtmlx_grid1").val(JSON.stringify(putThisInGrid)).trigger("change");
    var priorCloseDate = $("#prior_close_date_id").val();
    window["dhtmlx_grid_dhtmlx_grid1"]._grid_calendarA.setSensitiveRange(new Date(priorCloseDate), null);
    initializeDhtmlxGrids("dhtmlx_grid1");
    window["dhtmlx_grid_dhtmlx_grid1"].enableEditEvents(true, false, true);

    if(window["dhtmlx_grid_dhtmlx_grid1"].getAllRowIds()!= "" || window["dhtmlx_grid_dhtmlx_grid1"].getAllRowIds()!= undefined) {
      var rowIds = window["dhtmlx_grid_dhtmlx_grid1"].getAllRowIds().split(",");
      for (var i = 0; i < rowIds.length; i++) {
        //window["dhtmlx_grid_dhtmlx_grid1"].cells(rowIds[i], colIndx_custom_post).cell.className = "dhtmlx_validation_error";
        //window["dhtmlx_grid_dhtmlx_grid1"].cells(rowIds[i], colIndx_close_type).cell.className = "dhtmlx_validation_error";
        //window["dhtmlx_grid_dhtmlx_grid1"].cells(rowIds[i], colIndx_complete_date).cell.className = "dhtmlx_validation_error";
      }
    }

    window["dhtmlx_grid_dhtmlx_grid1"].attachEvent("onEditCell", function(stage, row, col, value) {
      var grid = window["dhtmlx_grid_dhtmlx_grid1"];
      var custom_type_value = "2626895";
      var value_close_type = grid.cellById(row, colIndx_close_type).getValue();

      if (stage == 2) {
        if (col == colIndx_complete_date) {
          //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
          //if (complete_checked == "1") {
            if (value == "") {
              grid.cells(row, colIndx_complete_date).cell.className = "dhtmlx_validation_error";
            } else {
              grid.cells(row, colIndx_complete_date).cell.className = "";
            }
          //}
        }
        if (col == colIndx_close_type) {
          //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
          //if (complete_checked == "1") {
            if (value_close_type) {
              grid.cells(row, colIndx_close_type).cell.className = "";
              if (value_close_type != custom_type_value) {
                grid.cells(row, colIndx_custom_post).cell.className = "";
                grid.cellById(row, colIndx_custom_post).setValue("");
                window["dhtmlx_grid_dhtmlx_grid1"].cellById(row, colIndx_custom_post).setDisabled(true);
              }
              if (value_close_type == custom_type_value) {
                window["dhtmlx_grid_dhtmlx_grid1"].cellById(row, colIndx_custom_post).setDisabled(false);
                if (grid.cellById(row, colIndx_custom_post).getValue() == "") {
                  grid.cells(row, colIndx_custom_post).cell.className = "dhtmlx_validation_error";
                }
              }
            } else {
              grid.cells(row, colIndx_close_type).cell.className = "dhtmlx_validation_error";
            }
          //}
        }
        if (col == colIndx_custom_post) {
          //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
          var closure_type_value = grid.cellById(row, colIndx_close_type).getValue();

          //if (complete_checked == "1" && closure_type_value == custom_type_value) {
          if (closure_type_value == custom_type_value) {
            window["dhtmlx_grid_dhtmlx_grid1"].cellById(row, colIndx_custom_post).setDisabled(false);
            if (value == "") {
              grid.cells(row, colIndx_custom_post).cell.className = "dhtmlx_validation_error";
            } else {
              grid.cells(row, colIndx_custom_post).cell.className = "";
            }
          }
        }
      }
      return true;
    });
  var numOfUpdatedWorkstreams = dhtmlx_grid_dhtmlx_grid1.getRowsNum();
  var tempDate = new Date();
  var date;
  var tmpMonthDate = tempDate.getMonth()+1;
  if (tmpMonthDate < 10) {
    tmpMonthDate = "0" + tmpMonthDate;
  }
  var tmpDayDate = tempDate.getDate();
  if (tmpDayDate < 10) {
    tmpDayDate = "0" + tmpDayDate;
  }
  var dateforCFV; 
  dateforCFV = tempDate.getFullYear() + "-" + tmpMonthDate + "-" + tmpDayDate;
    for(var ix = 0; ix<numOfUpdatedWorkstreams;ix++){
      if(gridDateFormat(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid1")[ix + 1].antic_end_date)<dateforCFV){
        window["dhtmlx_grid_dhtmlx_grid1"].setCellTextStyle((ix+1),3,"color:red;")
      }
    }
  }
  else if(counterforwscomplete%2!=1&&counterforwsupdate%2!=1){
   $("#ajax_submit-workspace_update_group_id").prop("disabled",true);
  }
  else{
    $("#form_group_dhtmlx_grid1").hide();
    $("#update_info_header_id").hide();
  }
  });



  $("#workstreamsToBeCompleted").click(function() {
    counterforwscomplete++;
    if(counterforwscomplete%2==1){
    $("#form_group_dhtmlx_grid2").show();
    $("#complete_info_header_id").show();
    $("#ajax_submit-workspace_update_group_id").prop("disabled",false)


    var putThisInGrid = [];
    var numOfWorkS = dhtmlx_grid_dhtmlx_grid0.getRowsNum();
    var l = 0;
    for (var i = 0; i < numOfWorkS; i++) {
      if ((Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].complete_workstream) == 1) {
        l++;
        var gridData = [];

        gridData.push(apiGridCall.data.results[i].id);
        gridData.push(Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].project_title+" - "+Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[i + 1].workstream_name);
        gridData.push("");
        gridData.push("");
        gridData.push("");
        gridData.push("[111]");
        gridData.push("[222]");

        var formattedMLData = { id: l, data: gridData };
        putThisInGrid.push(formattedMLData);
      }
    }
    $("#hidden_dataset_dhtmlx_grid2").val(JSON.stringify(putThisInGrid)).trigger("change");
    var priorCloseDate = $("#prior_close_date_id").val();
    //window["dhtmlx_grid_dhtmlx_grid2"]._grid_calendarA.setSensitiveRange(new Date(priorCloseDate), null);
    initializeDhtmlxGrids("dhtmlx_grid2");

    window["dhtmlx_grid_dhtmlx_grid2"].attachEvent("onCheck", function(rId,cInd,state){
       if(state==true){
      window["dhtmlx_grid_dhtmlx_grid2"].setRowTextStyle(this.getRowId((rId-1)), "background-color: #447CC5");
       }
       else{
        window["dhtmlx_grid_dhtmlx_grid2"].setRowTextStyle(this.getRowId((rId-1)), "background-color: #FFFFFF");
       }
  })
    
    //window["dhtmlx_grid_dhtmlx_grid2"].enableEditEvents(true, false, true);
    //window["dhtmlx_grid_dhtmlx_grid2"].enableEditEvents(true, false, true);

    // if(window["dhtmlx_grid_dhtmlx_grid2"].getAllRowIds()!= "" || window["dhtmlx_grid_dhtmlx_grid2"].getAllRowIds()!= undefined) {
    //   var rowIds = window["dhtmlx_grid_dhtmlx_grid2"].getAllRowIds().split(",");
    //   for (var i = 0; i < rowIds.length; i++) {
    //     window["dhtmlx_grid_dhtmlx_grid2"].cells(rowIds[i], colIndx_custom_post).cell.className = "dhtmlx_validation_error";
    //     window["dhtmlx_grid_dhtmlx_grid2"].cells(rowIds[i], colIndx_close_type).cell.className = "dhtmlx_validation_error";
    //     window["dhtmlx_grid_dhtmlx_grid2"].cells(rowIds[i], colIndx_complete_date).cell.className = "dhtmlx_validation_error";
    //   }
    // }

    // window["dhtmlx_grid_dhtmlx_grid2"].attachEvent("onEditCell", function(stage, row, col, value) {
    //   var grid = window["dhtmlx_grid_dhtmlx_grid2"];
    //   var custom_type_value = "2626895";
    //   var value_close_type = grid.cellById(row, colIndx_close_type).getValue();

    //   if (stage == 2) {
    //     if (col == colIndx_complete_date) {
    //       //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
    //       //if (complete_checked == "1") {
    //         if (value == "") {
    //           grid.cells(row, colIndx_complete_date).cell.className = "dhtmlx_validation_error";
    //         } else {
    //           grid.cells(row, colIndx_complete_date).cell.className = "";
    //         }
    //       //}
    //     }
    //     if (col == colIndx_close_type) {
    //       //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
    //       //if (complete_checked == "1") {
    //         if (value_close_type) {
    //           grid.cells(row, colIndx_close_type).cell.className = "";
    //           if (value_close_type != custom_type_value) {
    //             grid.cells(row, colIndx_custom_post).cell.className = "";
    //             grid.cellById(row, colIndx_custom_post).setValue("");
    //             window["dhtmlx_grid_dhtmlx_grid2"].cellById(row, colIndx_custom_post).setDisabled(true);
    //           }
    //           if (value_close_type == custom_type_value) {
    //             window["dhtmlx_grid_dhtmlx_grid2"].cellById(row, colIndx_custom_post).setDisabled(false);
    //             if (grid.cellById(row, colIndx_custom_post).getValue() == "") {
    //               grid.cells(row, colIndx_custom_post).cell.className = "dhtmlx_validation_error";
    //             }
    //           }
    //         } else {
    //           grid.cells(row, colIndx_close_type).cell.className = "dhtmlx_validation_error";
    //         }
    //       //}
    //     }
    //     if (col == colIndx_custom_post) {
    //       //var complete_checked = grid.cellById(row, colIndx_complete_check).getValue();
    //       var closure_type_value = grid.cellById(row, colIndx_close_type).getValue();

    //       //if (complete_checked == "1" && closure_type_value == custom_type_value) {
    //       if (closure_type_value == custom_type_value) {
    //         window["dhtmlx_grid_dhtmlx_grid2"].cellById(row, colIndx_custom_post).setDisabled(false);
    //         if (value == "") {
    //           grid.cells(row, colIndx_custom_post).cell.className = "dhtmlx_validation_error";
    //         } else {
    //           grid.cells(row, colIndx_custom_post).cell.className = "";
    //         }
    //       }
    //     }
    //   }
    //   return true;
    // });
  }
  else if(counterforwscomplete%2!=1&&counterforwsupdate%2!=1){
   $("#ajax_submit-workspace_update_group_id").prop("disabled",true);
  }
  else{
    $("#form_group_dhtmlx_grid2").hide();
    $("#complete_info_header_id").hide();

  }
  });
  $("#workstreamsBasedOnOwner").click(function() {
    message = "Retrieving data from selected user";
    showAlertMessage(message, "alert-info", false);
    userId = $("#admin_workstream_owner").val()[0];
    step2num = 2;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_workstream_owner
      //with_subject_id: "541429495,541429505,541429515,541429615,541429695,548106945"
    };
    step2_query_api_workstream_owner = createGetAPIQuery("custom_field_values", step2_api_workstream_owner, queryOptions, true);
    Utils.clientWebRequests(step2_query_api_workstream_owner);

});
  $("#ajax_submit-workspace_update_group_id").on("click", function() {

    //getUserIdsForPrivatePost();
    submitOnceCounter++;
    if(submitOnceCounter==1){
    createRequestPayloads();
    }
    else{
      alert("You have already submitted the form. Please refresh to submit again");
    }
  });

  $("#" + step8_project_auto_invite_values).on("change", function() {
    // If blank then add current user as post recipient to keep post as private
    var queryResults = JSON.parse($("#" + step8_project_auto_invite_values).val()).data;
    var cfvSubjectIdsYesResults = [];

    // only do something if there are results
    if (queryResults.count > 0) {
      var cfvIds = Object.keys(queryResults.custom_field_values);
      for (var i = 0; i < queryResults.count; i++) {
        var cfv = queryResults.custom_field_values[cfvIds[i]];
        if (cfv.display_value == CFVProjectInviteChoiceDisplayValue) {
          cfvSubjectIdsYesResults.push(cfv.subject_id);
        }
      }
    } else {
      // passive warning message to browser console for debugging purposes
      console.log("No Users found with Custom Field = Project Framework Form Auto Invite (" + CFVProjectInvite + ") set to Yes. Thus, no users getting added to private post.");
    };

    privatePostUserIds = cfvSubjectIdsYesResults;
    privatePostUserIds.push(Number(userId));


    var queryOptions = {
      //workspace_ids: formattedWorkspaceIds,
      matching: "Project%20Economics"
    };
  
    step9_query_project_economics = createGetAPIQuery("stories", step9_project_economics, queryOptions, true);
  
    Utils.clientWebRequests(step9_query_project_economics);
  });




  


  var cfId_rev_status = "616895";
  var cfId_gl_task_item_id = "136398";
  var cfId_workstream_owner = "579135";

  var cfId_workstream_id = "624595";
  var cfId_hours_completion = "622025";
  var cfId_contract_hours = "621145";
  var cfId_workstream_parent = "622925";

  var all_task_ids = "";

  // $("#" + step0_user_workstream).ready(function(){
  //   var message = "Retrieving User Data...";
  //   showAlertMessage(message, "alert-info", false);

  //   // var queryOptions = {
  //   //   subject_type: "story",
  //   //   with_custom_field_id:cfId_workstream_owner
  //   // };
  //   step0_query_user_workstream = createGetAPIQuery("users/me", step0_user_workstream, {},true);
  //   Utils.clientWebRequests(step0_query_user_workstream);

  // });
  $("#" + step0_user_workstream).on("change", function() {
    var message = "Retrieving Workstreams...";
    showAlertMessage(message, "alert-info", false);

    userData = getJsonValueFromHiddenField("user_workstream");
    if (userData.data.results[1] == undefined) {
      userId = userData.data.results[0].id;
    } else {
      var message = "There is an error in the user data";
      showAlertMessage(message, "alert-info", false);

    }
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: CFVOversight,
    };
    step1_query_api_cfv_oversight = createGetAPIQuery("custom_field_values", step1_api_cfv_oversight, queryOptions, true);
    Utils.clientWebRequests(step1_query_api_cfv_oversight);



  });

  $("#" + step1_api_cfv_oversight).on("change", function() {
    var message = "Retrieving Workspaces...";
    showAlertMessage(message, "alert-info", false);
    oversightJSON = getJsonValueFromHiddenField("api_cfv_oversight");
    var oversightID;
    var storyIDForOversight=[];
    var commaSepstoryIDForOversight;
    for (var x=0; x<oversightJSON.data.count;x++){
        if(oversightJSON.data.custom_field_values[oversightJSON.data.results[x].id].display_value.slice(-9,-8)=="#"){
            oversightID = oversightJSON.data.custom_field_values[oversightJSON.data.results[x].id].display_value.slice(-8,-1);
        }
        else{
            oversightID = oversightJSON.data.custom_field_values[oversightJSON.data.results[x].id].display_value.slice(-9,-1);
        }
        if(oversightID==userId){
            storyIDForOversight.push(oversightJSON.data.custom_field_values[oversightJSON.data.results[x].id].subject_id);
        }
    }
    if(storyIDForOversight[0]==undefined){
        step2num = 2;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_workstream_owner
      //with_subject_id: "541429495,541429505,541429515,541429615,541429695,548106945"
    };

    // set progressbar to 100%
    progressbar_update(progressbar_element_id,100, '100%');

    var message = "User Initialization completed. Preparing Workstreams...";
    showAlertMessage(message, "alert-info", false);

    // close progressbar
    $( "#" + progressbar_element_id + "_main" ).removeClass( "active" );
    $( "#" + progressbar_element_id + "_alert" ).fadeTo(200, 500).slideUp(500, function(){
      $( "#" + progressbar_element_id + "_alert" ).slideUp(1000);
    });    

    step2_query_api_workstream_owner = createGetAPIQuery("custom_field_values", step2_api_workstream_owner, queryOptions, true);
    Utils.clientWebRequests(step2_query_api_workstream_owner);
    }
    else{
        commaSepstoryIDForOversight = storyIDForOversight[0];
        for(var i = 1; i<storyIDForOversight.length;i++){
            commaSepstoryIDForOversight= commaSepstoryIDForOversight+","+storyIDForOversight[i]
        }

        step2num = 22;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_workstream_owner,
      with_subject_id: commaSepstoryIDForOversight
    };
    step22_query_api_workstream_owner_for_oversight = createGetAPIQuery("custom_field_values", step22_api_workstream_owner_for_oversight, queryOptions, true);
    Utils.clientWebRequests(step22_query_api_workstream_owner_for_oversight);
}
  });
  $("#" + step22_api_workstream_owner_for_oversight).on("change", function() {
    var message = "Successfully Retrieved Oversight selections!";
    showAlertMessage(message, "alert-success", false);
    var newOption;
    message = "Please select from dropdown";
    showAlertMessage(message, "alert-info", false);
    workstreamOwnerForOversight = getJsonValueFromHiddenField("workstream_owner_for_oversight");
    newOption = new Option(
        userData.data.users[userData.data.results[0].id].full_name,
        userData.data.users[userData.data.results[0].id].id,
        false,
        false);
     $("#admin_workstream_owner").append(newOption);
    for (var d=0; d<workstreamOwnerForOversight.data.count;d++){
        //for(var e = 0; e<document.getElementById("admin_workstream_owner").length;e++){
           // if(workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value!==document.getElementById("admin_workstream_owner")[e].text){
            if(workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value.slice(-9,-8)=="#"){
            newOption = new Option(
            workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value,
            workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value.slice(-8,-1),
            false,
            false);
         $("#admin_workstream_owner").append(newOption);
        }
    else{
        newOption = new Option(
            workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value,
            workstreamOwnerForOversight.data.custom_field_values[workstreamOwnerForOversight.data.results[d].id].display_value.slice(-9,-1),
            false,
            false);
         $("#admin_workstream_owner").append(newOption);
        }
    }
       // }
   // }
    





    // var idCount = workstream.data.count;
    // for (var i = 0; i < idCount; i++) {
    //   if (workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-9, -8) == "#") {
    //     if (userId == workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-8, -1)) {
    //       fullListOfIds.push(workstream.data.custom_field_values[workstream.data.results[i].id].subject_id);
    //     }
    //   } else {
    //     if (userId == workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-9, -1)) {
    //       fullListOfIds.push(workstream.data.custom_field_values[workstream.data.results[i].id].subject_id);
    //     }
    //   }
    // }
    // if (fullListOfIds[0]== undefined) {
    //   alert("There are no matching workstream owner custom fields!");
    // }
    // var formattedStoryIds = fullListOfIds[0];
    // for (var i = 1; i < fullListOfIds.length; i++) {
    //   formattedStoryIds = formattedStoryIds + "," + fullListOfIds[i];
    // }
    // step2num = 3;
    // var queryOptions = {
    //   subject_type: "story",
    //   with_custom_field_id: cfId_rev_status,
    //   with_subject_id: formattedStoryIds
    // };
    // step2_query_api_cfv_task = createGetAPIQuery("custom_field_values", step2_api_cfv_task, queryOptions, true);
    // Utils.clientWebRequests(step2_query_api_cfv_task);

  });

//     step2num = 2;
//     var queryOptions = {
//       subject_type: "story",
//       with_custom_field_id: cfId_workstream_owner
//       //with_subject_id: "541429495,541429505,541429515,541429615,541429695,548106945"
//     };
//     step2_query_api_workstream_owner = createGetAPIQuery("custom_field_values", step2_api_workstream_owner, queryOptions, true);
//     Utils.clientWebRequests(step2_query_api_workstream_owner);

//   });


  $("#" + step2_api_workstream_owner).on("change", function() {
    var message = "Successfully Retrieved CFVs: Workstream Owner!";
    showAlertMessage(message, "alert-success", false);

    message = "Formatting Task Data...";
    showAlertMessage(message, "alert-info", false);
    workstream = getJsonValueFromHiddenField("workstream_owner");

     // reset progressbar
     responseCounter = 0;
     responseTotal = stepsResponseTotal;

     progressbar_element_id = steps_progressbar_element_id;
     setup_progressbar(steps_progressbar_element_id, "Grid Setup Progress");

    var idCount = workstream.data.count;
    for (var i = 0; i < idCount; i++) {
      if (workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-9, -8) == "#") {
        if (userId == workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-8, -1)) {
          fullListOfIds.push(workstream.data.custom_field_values[workstream.data.results[i].id].subject_id);
        }
      } else {
        if (userId == workstream.data.custom_field_values[workstream.data.results[i].id].display_value.slice(-9, -1)) {
          fullListOfIds.push(workstream.data.custom_field_values[workstream.data.results[i].id].subject_id);
        }
      }
    }
    if (fullListOfIds[0] == undefined) {
      alert("There are no matching workstream owner custom fields!");
    }
    var formattedStoryIds = fullListOfIds[0];
    for (var i = 1; i < fullListOfIds.length; i++) {
      formattedStoryIds = formattedStoryIds + "," + fullListOfIds[i];
    }
    step2num = 3;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_rev_status,
      with_subject_id: formattedStoryIds
    };
    step2_query_api_cfv_task = createGetAPIQuery("custom_field_values", step2_api_cfv_task, queryOptions, true);
    Utils.clientWebRequests(step2_query_api_cfv_task);

  });

  $("#" + step2_api_cfv_task).on("change", function() {
    var message = "Successfully Retrieved CFVs: Rev Status!";
    showAlertMessage(message, "alert-success", false);

    message = "Formatting Task Data...";
    showAlertMessage(message, "alert-info", false);
    idk = getJsonValueFromHiddenField("api_cfv_task_base");
    // for(var i=0;i<idk.count;i++){
    //    // cfvIDS.push(idk.results[i].id);
    //     if(idk.custom_field_values[idk.results[i].id].custom_field_id==631065){
    //         if(idk.custom_field_values[idk.results[i].id].value==2662135){
    //         tasksOwned.push(idk.custom_field_values[idk.results[i].id].subject_id);
    //         }
    //     }
    //     if(idk.custom_field_values[idk.results[i].id].custom_field_id==631005){
    //         if(idk.custom_field_values[idk.results[i].id].value==2662045){
    //             tasksPending.push(idk.custom_field_values[idk.results[i].id].subject_id);
    //         }
    //     }
    // }
    // for(var j=0; j<tasksOwned.length;j++){
    //     for (var k=0; k<tasksPending.length;k++){
    //         if(tasksOwned[j]==tasksPending[k]){
    //             tasksMatched.push(tasksOwned[j]);
    //         }
    //     }
    // }
    // subjectIDS = tasksMatched[0];
    // for(var k=1;k<tasksMatched.length;k++){
    //     subjectIDS = subjectIDS + "," + tasksMatched[k];
    // }
    var revStatusCount = idk.data.count;
    fullListOfIds = [];
    for (var i = 0; i < revStatusCount; i++) {
      if (idk.data.custom_field_values[idk.data.results[i].id].value[0] == 2566445||idk.data.custom_field_values[idk.data.results[i].id].value[0]==2600985) {
        fullListOfIds.push(idk.data.custom_field_values[idk.data.results[i].id].subject_id);
      }
    }
    if (fullListOfIds == []) {
      alert("There are no workstreams with a rev status of pending!");
    }
    var formattedStoryIds = fullListOfIds[0];
    for (var i = 1; i < fullListOfIds.length; i++) {
      formattedStoryIds = formattedStoryIds + "," + fullListOfIds[i];
    }
    step2num = 4;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_gl_task_item_id,
      with_subject_id: formattedStoryIds
    };
    step2_query_api_gl_task = createGetAPIQuery("custom_field_values", step2_api_gl_task, queryOptions, true);
    Utils.clientWebRequests(step2_query_api_gl_task);

    // var queryOptions = {
    //     with_subject_id: subjectIDS,
    //     subject_type: "story",
    //     include: "custom_field_values",
    //     with_custom_field_id: cfId_workstream_id + "," + cfId_hours_completion + "," + cfId_contract_hours
    //   };
    //   var getQuery = createGetAPIQuery("custom_field_values", step3_dm_cfv_task, queryOptions);
    //   Utils.clientWebRequests(getQuery);
    //add format data routine
    //populate with results all_task_ids
  });

  $("#" + step2_api_gl_task).on("change", function() {
    var message = "Successfully Recieved Gl Task Item...";
    showAlertMessage(message, "alert-success", false);
    fullListOfIds = [];
    message = "Retrieving Additional CFV Data...";
    showAlertMessage(message, "alert-info", false);
    glTaskCFV = getJsonValueFromHiddenField("api_cfv_gl_task");
    for (var j = 0; j < glTaskCFV.data.count; j++) {
      if (glTaskCFV.data.custom_field_values[glTaskCFV.data.results[j].id].display_value.slice(0, 5) == "Maven") {
        listofidsforactualhours.push(glTaskCFV.data.custom_field_values[glTaskCFV.data.results[j].id].subject_id);
      }
    }
    var glTaskCount = glTaskCFV.data.count;
    for (var i = 0; i < glTaskCount; i++) {
      fullListOfIds.push(glTaskCFV.data.custom_field_values[glTaskCFV.data.results[i].id].subject_id);
    }
    var formattedStoryIds = fullListOfIds[0];
    for (var i = 1; i < fullListOfIds.length; i++) {
      formattedStoryIds = formattedStoryIds + "," + fullListOfIds[i];
    }
    step2num = 5;
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: cfId_workstream_id + "," + cfId_hours_completion + "," + cfId_contract_hours + "," + cfId_workstream_parent + "," + CFVantsStartDate + "," + CFVantsEndDate + "," + CFVETC,
      with_subject_id: formattedStoryIds
    };
    step3_query_dm_cfv_task = createGetAPIQuery("custom_field_values", step3_dm_cfv_task, queryOptions, true);
    Utils.clientWebRequests(step3_query_dm_cfv_task);
    // var queryOptions = {
    //   // with_subject_id: all_task_ids,
    //   subject_type: "story",
    //   with_custom_field_id: cfId_workstream_id + "," + cfId_hours_completion + "," + cfId_contract_hours
    // };
    // var getQuery = createGetAPIQuery("stories", step3_dm_cfv_task, queryOptions);
    // Utils.clientWebRequests(getQuery);
  });

  $("#" + step3_dm_cfv_task).on("change", function() {
    var message = "Successfully Formatted Task Data...";
    showAlertMessage(message, "alert-success", false);

    message = "Retrieving Additional CFV Data...";
    showAlertMessage(message, "alert-info", false);
    fullTaskCFV = getJsonValueFromHiddenField("dm_cfv_task_base");
    for (var k = 0; k < fullTaskCFV.data.count; k++) {
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[k].id].custom_field_id == 624595) {
        listofidsforactualhours.push(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[k].id].subject_id);
      }
    }
    var formattedStoryIds = fullListOfIds[0];
    for (var i = 1; i < fullListOfIds.length; i++) {
      formattedStoryIds = formattedStoryIds + "," + fullListOfIds[i];
    }
    for (var l = 0; l < listofidsforactualhours.length; l++) {
      formattedStoryIds = formattedStoryIds + "," + listofidsforactualhours[l];
    }
    step2num = 6;
    var queryOptions = {

      only: formattedStoryIds
    };
    step4_query_api_add_data = createGetAPIQuery("stories", step4_api_add_data, queryOptions, true);
    Utils.clientWebRequests(step4_query_api_add_data);
    // var queryOptions = {
    //   // with_subject_id: all_task_ids,
    //   subject_type: "story",
    //   with_custom_field_id: cfId_workstream_id + "," + cfId_hours_completion + "," + cfId_contract_hours
    // };
    // var getQuery = createGetAPIQuery("stories", step3_dm_cfv_task, queryOptions);
    // Utils.clientWebRequests(getQuery);
  });

  $("#" + step4_api_add_data).on("change", function() {
    var message = "Successfully Retrieved Stories!";
    showAlertMessage(message, "alert-success", false);
    apiGridCall = getJsonValueFromHiddenField("api_cfv_additional_data");

    var message = "Retrieving All Story Data!";
    showAlertMessage(message, "alert-info", false);

    var countForStories = apiGridCall.data.count;
    var numberRepeatedinArray = 1;
    for (var i = 0; i < countForStories; i++) {
      numberRepeatedinArray = 1;
      if (i == 0) {
        allWorkspaceIds.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id)
      } else {
        for (var j = 0; j < (i - 1); j++) {
          if (allWorkspaceIds[j] == apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id) {
            numberRepeatedinArray++;
          }
        }
        if (numberRepeatedinArray == 1) {
          if (allWorkspaceIds[0] !== apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id)
            allWorkspaceIds.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id);
        }
      }
    }

    formattedWorkspaceIds = allWorkspaceIds[0];
    for (var i = 1; i < allWorkspaceIds.length; i++) {
      formattedWorkspaceIds = formattedWorkspaceIds + "," + allWorkspaceIds[i];
    }
    stepNumberCounter = 1;
    var queryOptions = {
      include: "custom_field_values",
      with_projects: formattedWorkspaceIds
    };
    step45_query_all_project_data = createGetAPIQuery("stories", step45_all_project_data, queryOptions, true);
    Utils.clientWebRequests(step45_query_all_project_data);

  });
  $("#" + step45_all_project_data).on("change", function() {
    var message = "Successfully Retrieved All Story data!";
    showAlertMessage(message, "alert-success", false);
    var message = "Retrieving Workspaces!";
    showAlertMessage(message, "alert-info", false);

    allStoryData = getJsonValueFromHiddenField("api_cfv_all_project_data");
    var countForStories = apiGridCall.data.count;
    var numberRepeatedinArray = 1;
    for (var i = 0; i < countForStories; i++) {
      numberRepeatedinArray = 1;
      if (i == 0) {
        allWorkspaceIds.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id)
      } else {
        for (var j = 0; j < (i - 1); j++) {
          if (allWorkspaceIds[j] == apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id) {
            numberRepeatedinArray++;
          }
        }
        if (numberRepeatedinArray == 1) {
          if (allWorkspaceIds[0] !== apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id)
            allWorkspaceIds.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id);
        }
      }
    }

    formattedWorkspaceIds = allWorkspaceIds[0];
    for (var i = 1; i < allWorkspaceIds.length; i++) {
      formattedWorkspaceIds = formattedWorkspaceIds + "," + allWorkspaceIds[i];
    }
    stepNumberCounter = 2;

    var queryOptions = {
      only: formattedWorkspaceIds
    };
    step1_query_api_workspaces = createGetAPIQuery("workspaces", step1_api_workspaces, queryOptions, true);
    Utils.clientWebRequests(step1_query_api_workspaces);

  });

  $("#" + step1_api_workspaces).on("change", function() {

    var message = "Successfully Retrieved Workspaces!";
    showAlertMessage(message, "alert-success", false);


    jsonWorkspaces = getJsonValueFromHiddenField("api_workspaces");
    var message = "Adding Hours for Actual Hours Field ";
    showAlertMessage(message, "alert-info", false);

    var queryOptions = {
      include: "custom_field_values",
      with_projects: formattedWorkspaceIds
    };
    step5_query_api_actual_hours = createGetAPIQuery("stories", step5_api_actual_hours, queryOptions, true);
    Utils.clientWebRequests(step5_query_api_actual_hours);

  });
  $("#" + step5_api_actual_hours).on("change", function() {
    var message = "Successfully Retrieved All Related Tasks With Hours!";
    showAlertMessage(message, "alert-success", false);

    var message = "Checking Allocations ";
    showAlertMessage(message, "alert-info", false);
    actualHoursJSON = getJsonValueFromHiddenField("api_cfv_actual_hours");


  stepNumberCounter = 3;


    var queryOptions = {
      subject_type: "resource",
      //with_custom_field_id: "616115"
    };
    step6_query_api_allocation_data_part_1 = createGetAPIQuery("custom_field_values", step6_api_allocation_data_part_1, queryOptions, true);
    Utils.clientWebRequests(step6_query_api_allocation_data_part_1);


  });


  $("#" + step6_api_allocation_data_part_1).on("change", function() {
    var message = "Successfully Retrieved Allocation Resource!";
    showAlertMessage(message, "alert-success", false);

    var message = "Checking Allocations ";
    showAlertMessage(message, "alert-info", false);
    allocationResource = getJsonValueFromHiddenField("api_cfv_allocations_hours_part_1");
    var applicableResourceIds = [];
    for (var i = 0; i < fullTaskCFV.data.count; i++) {
      if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[i].id].custom_field_id == "624595") {
        applicableResourceIds.push(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[i].id].value);
      }
    }
    var formattedResourceIds = [];

    for (var j = 0; j < allocationResource.data.count; j++) {
      for (var k = 0; k < applicableResourceIds.length; k++)

        if (applicableResourceIds[k] == allocationResource.data.custom_field_values[allocationResource.data.results[j].id].value) {
          formattedResourceIds.push(allocationResource.data.custom_field_values[allocationResource.data.results[j].id].subject_id);
        }
    }
    var workspaceResourceID = formattedResourceIds[0]
    for (var i = 1; i < formattedResourceIds.length; i++) {
      workspaceResourceID = workspaceResourceID + "," + formattedResourceIds[i];
    }
    step2num = 7;
    var queryOptions = {
      workspace_resource_ids: workspaceResourceID
    };
    step6_query_api_allocation_data_part_2 = createGetAPIQuery("workspace_allocations", step6_api_allocation_data_part_2, queryOptions, true);
    Utils.clientWebRequests(step6_query_api_allocation_data_part_2);


  });

  $("#" + step6_api_allocation_data_part_2).on("change", function() {
    var message = "Successfully Retrieved All Data!";
    showAlertMessage(message, "alert-success", false);
    allocationHours = getJsonValueFromHiddenField("api_cfv_allocations_hours_part_2");
    var actualHoursMavenOps = 0;
    var subIdsForNonMaven = [];
    var relevStoryIdForAcHours = [];
    var actuallHoursNonMaven = 0;
    var totalGlTaskHours = 0;
    var totalRev8Hours = 0;
    allocationCounting = allocationHours.data.results.length - allocationHours.data.count;
    var putThisInGrid = [];
    arrayofCFVForActHour = [];

    for (var b = 0; b < allStoryData.data.count; b++) {
      allStoryData.data.stories[allStoryData.data.results[b].id].custom_field_value_ids.forEach(val => {
        arrayofCFVForActHour.push(val)
      });
    }
    // for(var c = 0; c<arrayofCFVForActHour.length;c++){
    //   if(allStoryData.data.custom_field_values[arrayofCFVForActHour[c]].custom_field_id = 136398)
    // }

    for (var i = 0; i < apiGridCall.data.count; i++) {
        //if(apiGridCall.data.results[i].id==624593855){
      actualHoursMavenOps = 0;
      totalGlTaskHours = 0;
      totalRev8Hours = 0;
      //match allocations to story
      var allocationHourInGridVal = 0;
      //Grabs custom field values on tasks
      for (var a = 0; a < fullTaskCFV.data.count; a++) {
        //Sorts for just workstream ID
        if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].custom_field_id == 624595) {
          if (apiGridCall.data.results[i].id == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].subject_id)
            //Goes through last values in results which should be workspace allocation ids
            for (var l = allocationCounting; l < allocationHours.data.results.length; l++) {
              //goes through all all allocation resources
              for (var m = 0; m < allocationResource.data.count; m++) {
                //if workspace allocation id is equal to the subject id of the allocation resource
                if (allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].workspace_resource_id == allocationResource.data.custom_field_values[allocationResource.data.results[m].id].subject_id) {
                  //if the custom field value (The actual workstream id) is equal to the custom field value on the task
                  if (allocationResource.data.custom_field_values[allocationResource.data.results[m].id].value == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[a].id].value) {
                    allocationHourInGridVal = allocationHourInGridVal + allocationHours.data.workspace_allocations[allocationHours.data.results[l].id].minutes;
                  }
                }
              }
            }
        }
      }


      relevStoryIdForAcHours = [];
      subIdsForNonMaven = [];
      //check for mavenops or non maven ops

    
      for(var u = 0;u<glTaskCFV.data.count;u++){
      
      if (apiGridCall.data.results[i].id==glTaskCFV.data.custom_field_values[glTaskCFV.data.results[u].id].subject_id){
        if(glTaskCFV.data.custom_field_values[glTaskCFV.data.results[u].id].value[0]==765265 || glTaskCFV.data.custom_field_values[glTaskCFV.data.results[u].id].value[0]==765255 || glTaskCFV.data.custom_field_values[glTaskCFV.data.results[u].id].value[0]==765245){
          for(var v = 0;v<arrayofCFVForActHour.length;v++){
            if(allStoryData.data.custom_field_values[arrayofCFVForActHour[v]].custom_field_id == "136398"){
              if(allStoryData.data.custom_field_values[arrayofCFVForActHour[v]].value[0]==765245 || allStoryData.data.custom_field_values[arrayofCFVForActHour[v]].value[0]==765255 || allStoryData.data.custom_field_values[arrayofCFVForActHour[v]].value[0]==765265){
              relevStoryIdForAcHours.push(allStoryData.data.custom_field_values[arrayofCFVForActHour[v]].subject_id)
              }
            }
          }
        

      
      for(var f=0;f<relevStoryIdForAcHours.length;f++){
        if (allStoryData.data.stories[relevStoryIdForAcHours[f]].workspace_id == jsonWorkspaces.data.workspaces[apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id].id){
          totalGlTaskHours = totalGlTaskHours+allStoryData.data.stories[relevStoryIdForAcHours[f]].logged_billable_time_in_minutes;
        }
      }


      var StoryIDForRev8 = [];
      var storyidforrev8pt2=[];
      var storyidrev8final=[];
      for (var k = 0;k<arrayofCFVForActHour.length;k++){
          if(actualHoursJSON.data.custom_field_values[arrayofCFVForActHour[k]].custom_field_id==622025){
            StoryIDForRev8.push(actualHoursJSON.data.custom_field_values[arrayofCFVForActHour[k]].subject_id);
          }
      }
      for (var rr = 0; rr<actualHoursJSON.data.count;rr++){
          if (jsonWorkspaces.data.workspaces[apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id].id==actualHoursJSON.data.stories[actualHoursJSON.data.results[rr].id].workspace_id){
              storyidforrev8pt2.push(actualHoursJSON.data.results[rr].id);
          }
      }
      for(var tt = 0 ; tt<StoryIDForRev8.length;tt++){
          for(var ty = 0; ty<storyidforrev8pt2.length;ty++){
           
            if (StoryIDForRev8[tt] == storyidforrev8pt2[ty]) {
               storyidrev8final.push(StoryIDForRev8[tt]);
           }
          }
      }
      for(var tq = 0; tq<arrayofCFVForActHour.length;tq++){
          for (var tw = 0; tw<storyidrev8final.length; tw++){
            if(actualHoursJSON.data.custom_field_values[arrayofCFVForActHour[tq]].custom_field_id==622025){
                if(actualHoursJSON.data.custom_field_values[arrayofCFVForActHour[tq]].subject_id==storyidrev8final[tw]){
                    totalRev8Hours = totalRev8Hours + actualHoursJSON.data.custom_field_values[arrayofCFVForActHour[tq]].value[0];
                }
            }
          }

      }

      totalRev8Hours = totalRev8Hours/100;
      totalRev8Hours = totalRev8Hours*60;
        // for (var k = 0; k < glTaskCFV.data.count; k++) {
        //   // if (apiGridCall.data.results[i].id == glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].subject_id) {
        //   //   if (glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].value[0] == "765245" || glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].value[0] == "765255" || glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].value[0] == "765265") {
        //   //     totalGlTaskHours = ((totalGlTaskHours + apiGridCall.data.stories[glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].subject_id].logged_billable_time_in_minutes));
        //       for (var x = 0; x < fullTaskCFV.data.count; x++) {
        //         if (glTaskCFV.data.custom_field_values[glTaskCFV.data.results[k].id].subject_id == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].subject_id) {
        //           if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].custom_field_id == "622025") {
        //             totalRev8Hours = totalRev8Hours + fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[x].id].value[0];
        //             totalRev8Hours = totalRev8Hours/100;
        //             totalRev8Hours = totalRev8Hours*60;
        //           }
        //         }
        //       }
        //     //}
        //   //}
        // }
        actualHoursMavenOps = totalGlTaskHours - totalRev8Hours;
      }
      else{
        for (var xx = 0; xx<fullTaskCFV.data.count;xx++){
          if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xx].id].subject_id==apiGridCall.data.results[i].id){
            if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xx].id].custom_field_id == "624595"){
              for (var xy = 0; xy<arrayofCFVForActHour.length;xy++){
                if(allStoryData.data.custom_field_values[arrayofCFVForActHour[xy]].custom_field_id=="624595"){
                  if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[xx].id].value==allStoryData.data.custom_field_values[arrayofCFVForActHour[xy]].value){
                    subIdsForNonMaven.push(allStoryData.data.custom_field_values[arrayofCFVForActHour[xy]].subject_id);
                  }
                }
              }
            }
          }
        }

        for(var xz = 0;xz<subIdsForNonMaven.length;xz++){
          actualHoursMavenOps = actualHoursMavenOps +allStoryData.data.stories[subIdsForNonMaven[xz]].logged_billable_time_in_minutes; 
        }
        // actualHoursMavenOps = 0;
      }
    }
  }
      var contractHoursVal = 0;
      for (var j = 0; j < fullTaskCFV.data.count; j++) {
        if (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[j].id].custom_field_id == 621145)
          if (apiGridCall.data.results[i].id == fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[j].id].subject_id) {
            contractHoursVal = (fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[j].id].value[0] / 100);
          }
      }
      var gridData = [];

      gridData.push(apiGridCall.data.results[i].id);
      gridData.push(jsonWorkspaces.data.workspaces[apiGridCall.data.stories[apiGridCall.data.results[i].id].workspace_id].title);
      gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].title);
      gridData.push((actualHoursMavenOps / 60).toFixed(2));
      gridData.push((allocationHourInGridVal / 60).toFixed(2));
      gridData.push(contractHoursVal);
      gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].start_date);
      gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].due_date);
      gridData.push(apiGridCall.data.stories[apiGridCall.data.results[i].id].percentage_complete)
      gridData.push("");
      gridData.push("");


      var formattedMLData = { id: i + 1, data: gridData };
      putThisInGrid.push(formattedMLData);
   //}
    }
    $("#hidden_dataset_dhtmlx_grid0").val(JSON.stringify(putThisInGrid)).trigger("change");
    window["dhtmlx_grid_dhtmlx_grid0"].attachEvent("onCheck", function(rId,cInd,state){
      if(state==true){
     window["dhtmlx_grid_dhtmlx_grid0"].setRowTextStyle(this.getRowId((rId-1)), "background-color: #57AEFC");
      }
      else{
       window["dhtmlx_grid_dhtmlx_grid0"].setRowTextStyle(this.getRowId((rId-1)), "background-color: #FFFFFF");
      }
 })
    var idInGrid = [];
    for (var s = 0; s < apiGridCall.data.count; s++) {
      idInGrid.push(apiGridCall.data.results[s].id)
    }
    var SubIDS = idInGrid[0];
    for (var t = 1; t < idInGrid.length; t++) {
      SubIDS = SubIDS + "," + idInGrid[t];
    }
    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: "616895",
      with_subject_id: SubIDS


    };
    for(var ix = 0; ix < idk.data.count; ix++) {
      for(var iy = 0; iy<dhtmlx_grid_dhtmlx_grid0.getRowsNum();iy++){
      if (idk.data.custom_field_values[idk.data.results[ix].id].subject_id  ==Utils.getDataDhtmlxGrid("dhtmlx_grid_dhtmlx_grid0")[iy + 1].holder)
      {
        if(idk.data.custom_field_values[idk.data.results[ix].id].value[0] ==2600985){
          window["dhtmlx_grid_dhtmlx_grid0"].cellById(iy+1,10).setDisabled(true);

          }
        }
      }
    }
  



    step7_query_cfv_values = createGetAPIQuery("custom_field_values", step7_cfv_values, queryOptions, true);
    Utils.clientWebRequests(step7_query_cfv_values);
  });



  $("#" + step7_cfv_values).on("change", function() {
    var message = "Successfully Retrieved All Values!";
    showAlertMessage(message, "alert-success", false);
    customvalls = getJsonValueFromHiddenField("api_cfv_custom_values");
    step2num = 4;
    getUserIdsForPrivatePost();

  });
  $("#" + step9_project_economics).on("change", function() {
    PETasks = getJsonValueFromHiddenField("api_cfv_project_economics");

    step2num = 33;
    var idInGrid = [];
    for (var s = 0; s < apiGridCall.data.count; s++) {
      idInGrid.push(apiGridCall.data.results[s].id)
    }
    var SubIDS = idInGrid[0];
    for (var t = 1; t < idInGrid.length; t++) {
      SubIDS = SubIDS + "," + idInGrid[t];
    }
    for(var z = 0;z<fullTaskCFV.data.count;z++){
      if(fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[z].id].custom_field_id==624595){
        SubIDS= SubIDS+","+fullTaskCFV.data.custom_field_values[fullTaskCFV.data.results[z].id].value;
      }
    }

    var queryOptions = {
      subject_type: "story",
      with_custom_field_id: "673745,673735,617365,673825,656215,558675,385795",
      with_subject_id: SubIDS

    };
    step11_query_cfv_vals = createGetAPIQuery("custom_field_values", step11_cfv_vals, queryOptions, true);
    Utils.clientWebRequests(step11_query_cfv_vals);

  });





  $("#" + step11_cfv_vals).on("change", function() {
    cfvVals = getJsonValueFromHiddenField("api_cfv_vals");
    step2num = 34;



  });





});
