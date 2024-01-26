export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city) // Filter students by cityku
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A', // Update grade or set to 'N/A'c
            };
        });
}  
