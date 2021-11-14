function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
    }

function cls()
    {
        calculatorForm.evalresult.value = "";
    }

function clr()
    {
        calculatorForm.evalresult.value = calculatorForm.evalresult.value.substring(0,calculatorForm.evalresult.value.length-1);
    }

function persen()
    {
        calculatorForm.evalresult.value = calculatorForm.evalresult.value / 100;
    }

function pangkat()
    {
        calculatorForm.evalresult.value = calculatorForm.evalresult.value * calculatorForm.evalresult.value;
    }