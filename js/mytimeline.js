$(function() {
    loadTimeline = function() {                
        
        $.getJSON('json/resume.json', function(data) {
            var toggle_popover = function() {
                var length = data.timeline["date"].length + 1;
                var custom_tooltips = $('#my-timeline .custom-tooltip');
                if (custom_tooltips.length >= length) {                
                    custom_tooltips.popover();
                }
                else {
                    setTimeout(function() {
                        toggle_popover();
                    }, 1000);
                }
            };
            var today = new Date();
            var today_string = today.getFullYear() + "," + today.getMonth() + "," + today.getDate();
            //set the last job end date to today, in case you're still employed
            data.timeline["date"][0]["endDate"] = today_string;   
            //console.log(data);                     
            setDetailTimeline(data, function(return_data) {
               createStoryJS({
                    type:       'timeline',
                    width:      '100%',
                    height:     '600',
                    source:     return_data,
                    start_at_end: true,
                    success_callback: toggle_popover,
                    preload: 10, 
                    //debug: true,           
                    embed_id:   'my-timeline'           // ID of the DIV you want to load the timeline into
               });
           });
        })
        .error(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    };
    
    setDetailTimeline = function(json_data, callback) {
        $.get('resume_detail.html','', function(response) {
            var i = 0,
                id = null,
                cover = $(response).find('.cover'),          
                resume_cover = cover.find('#resume-cover-container'),
                resume_cover_content = cover.find('#resume-cover-content'),
                html = resume_cover.html();
            html = html.replace("{replace_content}", resume_cover_content.html());
            //console.log(resume_cover.html());
            json_data.timeline.text = html;
            for (i=0; i<json_data.timeline.date.length; i++) {
                id = json_data.timeline.date[i].id;
                if (id) {
                    var timeline = cover.find('#' + id + '-container');
                    if (timeline.length > 0) {
                        var timeline_content = cover.find('#' + id + '-content');
                        html = timeline.html();
                        html = html.replace('{replace_content}', timeline_content.html());
                        json_data.timeline.date[i].text = html;    
                    }
                } 
            }
            
            
            callback(json_data);    
        });
    };
    
    loadTimeline();        
});
