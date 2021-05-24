let select = function () {
    let selectHeader = document.querySelectorAll(".select_header");
    let selectItem = document.querySelectorAll(".select_item");

    selectHeader.forEach(item => {
        item.addEventListener("click", selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener("click", selectChoose)
    });

    selectItem.forEach(item => {
        item.addEventListener("click", selectPrice)
    })

    function selectToggle() {
        this.parentElement.classList.toggle("is-active");
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest(".select"),
            currentText = select.querySelector(".select_current");
            currentText.innerText = text;
            select.classList.remove("is-active");

    }

    function selectPrice() {
        let dataPrice = this.dataset.price,
            selection = this.closest(".select"),
            currentPrice = selection.querySelector(".select_current");
        currentPrice.dataset.price = dataPrice;
    }

};


select();


document.addEventListener("DOMContentLoaded" , () => {
    "use strict";

    //FIRST PAGE LOGIC
    const form1 = document.getElementById("first_form");
    let isAvailable = 0;
    const length = document.getElementById("input_length_1");
    const height = document.getElementById("input_height_1");
    const lengthWarning = document.getElementById("length_warning");
    const lengthCheckImg = document.getElementById("length_check");
    const heightWarning = document.getElementById("height_warning");
    const heightCheckImg = document.getElementById("height_check");
    const selectorCurrent = document.querySelector(".select_current");
    const lengthUnitsInfo = document.getElementById("length_units");
    const heightUnitsInfo = document.getElementById("height_units");
    const select1 = document.querySelector(".si1");
    const select2 = document.querySelector(".si2");
    const select3 = document.querySelector(".si3");
    const select4 = document.querySelector(".si4");
    const selectWarning = document.getElementById("select_warning");
    const selectCheckImg = document.getElementById("select_check");
    const button1 = document.getElementById("button");
    const checkbox1 = document.getElementById("installation");
    const totalPrice = document.getElementById("summ");
    const content1 = document.getElementById("content");
    const content2 = document.getElementById("content_2");
    const units = document.getElementById("units")
    let area = 0;
    let currentSelectPrice = 1;

    const regExpNumber= /^[0-9.]{1,4}$/;

    const validateElem = (elem) => {

        if (elem.name === "length") {
            if (!regExpNumber.test(elem.value) || elem.value === "0") {
                lengthWarning.textContent = "Не верно заполнено поле";
                lengthCheckImg.classList.remove("display_inline");
                elem.classList.add("border_red");
            } else {
                lengthWarning.textContent = "";
                lengthCheckImg.classList.add("display_inline");
                elem.classList.remove("border_red");
            }
        };

        if (elem.name === "height") {
            if (!regExpNumber.test(elem.value) || elem.value === "0") {
                heightWarning.textContent = "Не верно заполнено поле";
                heightCheckImg.classList.remove("display_inline");
                elem.classList.add("border_red");
            } else {
                heightWarning.textContent = "";
                heightCheckImg.classList.add("display_inline");
                elem.classList.remove("border_red");
            }  
        };
    };

    const buttonAvailable = () => {
        isAvailable = 1;

        if (!regExpNumber.test(length.value)
            || length.value === "0") {
            isAvailable *= 0;
        }

        if (!regExpNumber.test(height.value)
            || height.value === "0") {
            isAvailable *= 0;
        }

        if (selectorCurrent.dataset.price === "1") {
            isAvailable *= 0
        }

        if (isAvailable === 0) {
            return false;
        } else {
            return true;
        }
    };

    const pluralOfUnits = (elem) => {
        const elemValue = +elem.value;

        if (elemValue === 1 || elemValue % 10 >= 1) {
            elem.nextElementSibling.textContent = "метр";
        }
        
        if ((elemValue > 1 && elemValue < 5) || (elemValue > 21 && (elemValue % 10 > 1 && elemValue % 10 < 5))) {
            elem.nextElementSibling.textContent = "метра";
        }

        if ((elemValue >= 5 && elemValue < 21) || (elemValue > 24 && (elemValue % 10 > 4 && elemValue % 10 < 9)) || elemValue % 10 ===0) {
            elem.nextElementSibling.textContent = "метров";
        }
    }

    const deleteUnnecessaryRounding = () => {

        if (totalPrice.textContent.substr(-3, totalPrice.textContent.length) === ".00") {
            totalPrice.textContent = totalPrice.textContent.substr(0, totalPrice.textContent.length - 3);
        }

        if (totalPrice.textContent.substr(-1, totalPrice.textContent.length) === "0" &&
            totalPrice.textContent[totalPrice.textContent.length - 3] === ".") {
            totalPrice.textContent = totalPrice.textContent.substr(0, totalPrice.textContent.length - 1);
        }
        
    };

    select1.addEventListener("click", () => {
        buttonAvailable();

        if (buttonAvailable()) {
            button1.classList.remove("button");
            button1.classList.add("button1_available");
        } else {
            button1.classList.remove("button1_available")
            button1.classList.add("button");
        };

        currentSelectPrice = (document.querySelector(".select_current").dataset.price);
        totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
        deleteUnnecessaryRounding();
        if (!checkbox1.checked) {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
            deleteUnnecessaryRounding();
        } else {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice + (area * 200))*toFixed(2);
            deleteUnnecessaryRounding();
        }
        selectWarning.textContent = "";
        selectCheckImg.classList.remove("display_none");
        selectCheckImg.classList.add("display_inline");
        select1.classList.add("select_active");
        select2.classList.remove("select_active");
        select3.classList.remove("select_active");
        select4.classList.remove("select_active");
    })

    select2.addEventListener("click", () => {
        buttonAvailable();

        if (buttonAvailable()) {
            button1.classList.remove("button");
            button1.classList.add("button1_available");
        } else {
            button1.classList.remove("button1_available");
            button1.classList.add("button");
        };
                
        currentSelectPrice = (document.querySelector(".select_current").dataset.price);
        totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
        deleteUnnecessaryRounding();
        if (!checkbox1.checked) {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
            deleteUnnecessaryRounding();
        } else {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice + (area * 200)).toFixed(2);
            deleteUnnecessaryRounding();
        }
        selectWarning.textContent = "";
        selectCheckImg.classList.remove("display_none");
        selectCheckImg.classList.add("display_inline");
        select2.classList.add("select_active");
        select1.classList.remove("select_active");
        select3.classList.remove("select_active");
        select4.classList.remove("select_active");        
    })

    select3.addEventListener("click", () => {
        buttonAvailable();

        if (buttonAvailable()) {
            button1.classList.remove("button");
            button1.classList.add("button1_available");
        } else {
            button1.classList.remove("button1_available");
            button1.classList.add("button");
        };
         
        currentSelectPrice = (document.querySelector(".select_current").dataset.price);
        totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
        deleteUnnecessaryRounding();
        if (!checkbox1.checked) {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
            deleteUnnecessaryRounding();
        } else {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice + (area * 200)).toFixed(2);
            deleteUnnecessaryRounding();
        }
        selectWarning.textContent = "";
        selectCheckImg.classList.remove("display_none");
        selectCheckImg.classList.add("display_inline");
        select3.classList.add("select_active");
        select2.classList.remove("select_active");
        select1.classList.remove("select_active");
        select4.classList.remove("select_active"); 
    })

    select4.addEventListener("click", () => {
        buttonAvailable();

        if (buttonAvailable()) {
            button1.classList.remove("button");
            button1.classList.add("button1_available");
        } else {
            button1.classList.remove("button1_available");
            button1.classList.add("button");
        };
         
        currentSelectPrice = (document.querySelector(".select_current").dataset.price);
        totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
        deleteUnnecessaryRounding();
        if (!checkbox1.checked) {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
            deleteUnnecessaryRounding();
        } else {
            area = length.value * height.value;
            totalPrice.textContent = (area * currentSelectPrice + (area * 200)).toFixed(2);
            deleteUnnecessaryRounding();
        }
        selectWarning.textContent = "";
        selectCheckImg.classList.remove("display_none");
        selectCheckImg.classList.add("display_inline");
        select4.classList.add("select_active");
        select2.classList.remove("select_active");
        select3.classList.remove("select_active");
        select1.classList.remove("select_active"); 
    })

    for (let elem of form1.elements) {
        if (
            !elem.classList.contains("custom_checkbox") &&
            elem.tagName !== "BUTTON"
            ) {
                elem.addEventListener("blur", () => {
                    validateElem(elem);
                    buttonAvailable();
                    pluralOfUnits(elem);

                    if (buttonAvailable()) {
                        button1.classList.remove("button");
                        button1.classList.add("button1_available");
                    } else {
                        button1.classList.remove("button1_available");
                        button1.classList.add("button");
                    };
         
                })
        }
    }
    
    for (let elem of form1.elements) {
        elem.addEventListener("change", () => {
            if (!checkbox1.checked) {
                area = length.value * height.value;
                totalPrice.textContent = (area * currentSelectPrice).toFixed(2);
                deleteUnnecessaryRounding();
            }
        })
    }

    checkbox1.addEventListener("change", () => {
        if (checkbox1.checked) {
            totalPrice.textContent = (area * 200 + area * currentSelectPrice).toFixed(2);
            deleteUnnecessaryRounding();
        }
    })

    form1.addEventListener("submit", (even) => {
        even.preventDefault();

        if (selectorCurrent.dataset.price === "1") {
            selectWarning.textContent = "Выберите материал"
        } else {
        };

        if (isAvailable === 1) {
            content2.classList.remove("content_hidden");
            content2.classList.add("content_visible");
            content1.classList.remove("content_visible");
            content1.classList.add("content_hidden");
        }
    });

    //SECOND PAGE LOGIC
    const form2 = document.getElementById("second_form");
    let isAvailable2 = 0;
    const nameWarning = document.getElementById("name_warning");
    const emailWarning = document.getElementById("email_warning");
    const phoneWarning = document.getElementById("phone_warning");
    const nameCheckImg = document.getElementById("name_check");
    const emailCheckImg = document.getElementById("email_check");
    const phoneCheckImg = document.getElementById("phone_check");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("tel");
    const button2 = document.getElementById("button2");
    const content3 = document.getElementById("content_3");
    const secondScreenBackButton = document.getElementById("second_screen_back");
    const thirdScreenBackButton = document.getElementById("third_screen_back");
    const fourthScreenBackButton = document.getElementById("fourth_screen_back");
    const orderNumber = document.getElementById("order_number");
    const thirdScreenEmail = document.getElementById("third_screen_email");
    const thirdScreenPhone = document.getElementById("third_screen_phone");
    const thirdScreenName = document.getElementById("third_screen_name");
    const orderSummaryLength = document.getElementById("order_summary_length");
    const orderSummaryHeight = document.getElementById("order_summary_height");
    const orderSummaryMaterial = document.getElementById("order_summary_material");
    const orderSummarySumm = document.getElementById("order_summary_summ");
    const currentMaterial = document.getElementById("material");
    const orderInfo = document.getElementById("order_info");
    const content4 = document.getElementById("content_4");


    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const regExpTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    const validateElem2 = (elem) => {        
        if (elem.name === "name") {
            if (elem.value === "") {
                nameWarning.textContent = "Не верно заполнено поле";
                nameCheckImg.classList.remove("display_inline");
                nameCheckImg.classList.add("display_none");
                elem.classList.add("border_red");
            } else {
                nameWarning.textContent = "";
                nameCheckImg.classList.remove("display_none");
                nameCheckImg.classList.add("display_inline");
                elem.classList.remove("border_red");
            }
        };

        if (elem.name === "email") {
            if (!regExpEmail.test(elem.value) || elem.value === "0") {
                emailWarning.textContent = "Не верно заполнено поле";
                emailCheckImg.classList.remove("display_inline");
                emailCheckImg.classList.add("display_none");
                elem.classList.add("border_red");
            } else {
                emailWarning.textContent = "";
                emailCheckImg.classList.remove("display_none");
                emailCheckImg.classList.add("display_inline");
                elem.classList.remove("border_red");
            }
        };

        if (elem.name === "phone") {
            if (!regExpTel.test(elem.value) || elem.value === "") {
                phoneWarning.textContent = "Не верно заполнено поле";
                phoneCheckImg.classList.remove("display_inline");
                phoneCheckImg.classList.add("display_none");
                elem.classList.add("border_red");
            } else {
                phoneWarning.textContent = "";
                phoneCheckImg.classList.remove("display_none");
                phoneCheckImg.classList.add("display_inline");
                elem.classList.remove("border_red");
            }
        };
    };

    const currentMaterialText = () => {
        if (currentMaterial.textContent[0] === "П") {
            orderSummaryMaterial.textContent = "профнастил"
        }

        if (currentMaterial.textContent[0] === "М") {
            orderSummaryMaterial.textContent = "модули"
        }

        if (currentMaterial.textContent[0] === "Б") {
            orderSummaryMaterial.textContent = "бетон"
        }

        if (currentMaterial.textContent[0] === "С") {
            orderSummaryMaterial.textContent = "сетка"
        }
    }

    const buttonAvailable2 = () => {
        isAvailable2 = 1;

        if (name.value === "") {
            isAvailable2 *= 0;
        }

        if (!regExpEmail.test(email.value) || email.value === "0") {
            isAvailable2 *= 0;
        }

        if (!regExpTel.test(phone.value)
            || phone.value === "0") {
            isAvailable2 *= 0;
        }

        if (isAvailable2 === 0) {
            orderInfo.classList.remove("order_info_visible");
            orderInfo.classList.add("order_info_hidden");
            return false;
        } else {
            orderInfo.classList.remove("order_info_hidden");
            orderInfo.classList.add("order_info_visible");
            orderSummaryLength.textContent = "длинной " + length.value + " " + lengthUnitsInfo.textContent;
            orderSummaryHeight.textContent = "высотой " + height.value + " " + heightUnitsInfo.textContent;
            currentMaterialText();
            orderSummarySumm.textContent = totalPrice.textContent;
            return true;
        }
    };

    const closeButton = (btn) => {
        btn.parentElement.parentElement.classList.remove("content_visible");
        btn.parentElement.parentElement.classList.add("content_hidden");
        content1.classList.remove("content_hidden");
        content1.classList.add("content_visible");
        form1.reset();
        form2.reset();
        lengthCheckImg.classList.remove("display_inline");
        heightCheckImg.classList.remove("display_inline");
        selectCheckImg.classList.remove("display_inline");
        selectCheckImg.classList.add("display_none");
        lengthUnitsInfo.textContent = "метров";
        heightUnitsInfo.textContent = "метров";
        button1.classList.remove("button1_available")
        button1.classList.add("button");
        nameCheckImg.classList.remove("display_inline");
        nameCheckImg.classList.add("display_none");
        emailCheckImg.classList.remove("display_inline");
        emailCheckImg.classList.add("display_none");
        phoneCheckImg.classList.remove("display_inline");
        phoneCheckImg.classList.add("display_none");
        button2.classList.remove("button2_available");
        button2.classList.add("button_send");
        orderInfo.classList.remove("order_info_visible");
        orderInfo.classList.add("order_info_hidden");
        totalPrice.textContent = 0;
        currentMaterial.textContent = "Выберите материал";
        currentMaterial.dataset.price = 1;
    }

    for (let elem of form2.elements) {
        if (elem.tagName !== "BUTTON2") {
           elem.addEventListener("input", () => {
               validateElem2(elem);
               buttonAvailable2();

               if (buttonAvailable2()) {
                button2.classList.remove("button_send")
                button2.classList.add("button2_available")
            } else {
                button2.classList.remove("button2_available")
                button2.classList.add("button_send")
            };
           });
        };
    };

    form2.addEventListener("submit", (even) => {
        even.preventDefault();

        if (isAvailable2 === 1) {
            orderNumber.textContent = "№ " + Math.floor(1+(1000-1)*Math.random());
            thirdScreenEmail.textContent = email.value;
            thirdScreenPhone.textContent = phone.value;
            thirdScreenName.textContent = name.value + ",";

            let formData = {

                email: email.value,

                name: name.value,

                orderNumb: orderNumber.textContent,

                phone: phone.value,

            }

            let xhr = new XMLHttpRequest();

            xhr.open("POST", "http://u89235.test-handyhost.ru/mail.php", true);

            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");

            xhr.send("user_name=" + encodeURIComponent(formData.name) + "&user_phone=" + encodeURIComponent(formData.phone)
            + "&user_email=" + encodeURIComponent(formData.email) + "&order_number=" + encodeURIComponent(formData.orderNumb));
            
            xhr.onerror = function() { 
                content4.classList.remove("content_hidden");
                content4.classList.add("content_visible");
                content2.classList.remove("content_visible");
                content2.classList.add("content_hidden");
            };

            xhr.onload = function() {
                content3.classList.remove("content_hidden");
                content3.classList.add("content_visible");
                content2.classList.remove("content_visible");
                content2.classList.add("content_hidden");
            };
            
        }
    });

    secondScreenBackButton.addEventListener("click", () => {
        content2.classList.remove("content_visible");
        content2.classList.add("content_hidden");
        content1.classList.remove("content_hidden");
        content1.classList.add("content_visible");
    })

    thirdScreenBackButton.addEventListener("click", () => {
        closeButton(thirdScreenBackButton);
        });

    fourthScreenBackButton.addEventListener("click", () => {
        closeButton(fourthScreenBackButton);
        });
});