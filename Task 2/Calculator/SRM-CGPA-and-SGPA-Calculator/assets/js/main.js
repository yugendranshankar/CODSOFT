
  

grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "P":4,
    "F":0,
    "Ab":0,
    "I":0
};


var count = 5;
$("#go").on("click",calculate);
$("#go").on("click", function(){
// $(".table").remove(); 
// $("#more").remove();
$(".table").css("display","none");
});
$("#reset").on("click", function(){
    
    $("#go").removeClass("hidden");
    $("#reset").addClass("hidden");
   
    $("#result").addClass("hidden");
    $("#more").removeClass("hidden");
    $(".table").css("display","block");
    // $(".table").removeClass("hidden");
 
    //  $(".container-fluid").append('<table class="table"> <tr> <th>Course</th> <th>Credits</th> <th>Grades</th> </tr> <!-- Row 1 --> <tr> <td><label for="cr1">1.</label></td> <td><input type="number" class="cred form-control" id="cr1" min=1></td> <td> <select class="opt form-control"> <option>O</option> <option>A+</option> <option>A</option> <option>B+</option> <option>B</option> <option>C</option> <option>P</option> <option>F</option> <option>Ab</option> <option>I</option> </select> </td> </tr> <!-- Row 2 --> <tr> <td><label for="cr2">2.</label></td> <td><input type="number" class="cred form-control" id="cr2" min=1></td> <td> <select class="opt form-control"> <option>O</option> <option>A+</option> <option>A</option> <option>B+</option> <option>B</option> <option>C</option> <option>P</option> <option>F</option> <option>Ab</option> <option>I</option> </select> </td> </tr> <!-- Option 3 --> <tr> <td><label for="cr3">3.</label></td> <td><input type="number" class="cred form-control" id="cr3" min=1  ></td> <td> <select class="opt form-control"> <option>O</option> <option>A+</option> <option>A</option> <option>B+</option> <option>B</option> <option>C</option> <option>P</option> <option>F</option> <option>Ab</option> <option>I</option> </select> </td> </tr> <!-- Row 4 --> <tr> <td><label for="cr4">4.</label></td> <td><input type="number" class="cred form-control" id="cr4" min=1  ></td> <td> <select class="opt form-control"> <option>O</option> <option>A+</option> <option>A</option> <option>B+</option> <option>B</option> <option>C</option> <option>P</option> <option>F</option> <option>Ab</option> <option>I</option> </select> </td> </tr> <!-- Row 5 --> <tr> <td><label for="cr5">5.</label></td> <td><input type="number" class="cred form-control" id="cr5" min=1></td> <td> <select class="opt form-control"> <option>O</option> <option>A+</option> <option>A</option> <option>B+</option> <option>B</option> <option>C</option> <option>P</option> <option>F</option> <option>Ab</option> <option>I</option> </select> </td> </tr> </table>');
});
function calculate(event)
{
    var grade_list = $(".opt");
    var credit_list = $(".cred");
    var points = 0;
    var sum_credits = 0;
    for(var i=0; i<credit_list.length; i++)
        {
            if(credit_list[i].value==="")
                {
                    var credit = 0;
                }
            else
            {
                var credit = Number(credit_list[i].value);
            }
            sum_credits+=credit;
            var gradept = grade_points[grade_list[i].value];
            points+=credit*gradept;
        }
    var gpa = (points/sum_credits);
    var percent = (gpa*10).toFixed(0);
    $("#result").removeClass("hidden");
    $("#more").addClass("hidden");
    $("#gpa").text(gpa.toFixed(2));
    $(".bar").css({"width": percent+"%"});
    $(".p").append("hii");
    $("#reset").removeClass("hidden");
    $("#go").addClass("hidden");
    window.scrollTo(0,0);
    event.stopPropagation();
}

$("#more").on("click", function(event){
    // var k=10
    // k=k+10
    //  var k="100px";
    let increase_modifier = 65;
    let curr =  $(".container-fluid").height();
    $(".container-fluid").height(curr + increase_modifier );
    // $(".container-fluid").animate({height:'90vh'},500);
    // $(".container-fluid").css("height",k);
    count+=1;
    $("form table").append("<tr><td>" + count + ".</td><td><input type='number' class='cred form-control'></td><td><select class='opt form-control'><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>C</option><option>P</option><option>F</option><option>Ab</option><option>I</option></select></td></tr>");
});


