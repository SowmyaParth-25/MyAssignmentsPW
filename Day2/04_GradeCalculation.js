/*Write a JavaScript function that evaluates a student's score and returns their grade using a switch 
statement to assess score ranges.
*/


let studentGrade= (score) => {
    switch(true)
    {
        case (score>=90 && score<=100):
        console.log('A Grade')
        break; 

        case (score>=80 && score<=90):
        console.log('B Grade')
        break;

        case (score>=60 && score<=80):
        console.log('C Grade')
        break;
        
        case (score>=40 && score<=60):
            console.log('D Grade')
            break;

            case (score<=40):
            console.log('E Grade')
            break;
        default:
            console.log('Invalid Information')
    }
}
studentGrade(98)
studentGrade(378)
studentGrade(78)
studentGrade(0)
