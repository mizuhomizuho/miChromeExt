
'use strict'

;(() => {

    if (location.pathname.indexOf('/cart') !== 0) {

        return
    }

    const interval = setInterval(() => {

        const arr = [...document.querySelectorAll('.b-basket__wrapper')]

        if (arr.length) {
            clearInterval(interval)
        }

        for (const key in arr) {

            const el = arr[key]

            if (
                el.querySelectorAll('.page-content__title.page-content__title--white').length === 1
                && el.querySelector('.page-content__title.page-content__title--white').innerHTML === 'Оплата'
            ) {

                const arr = [...el.querySelectorAll('.b-basket__tab')]

                for (const key in arr) {

                    const el = arr[key]

                    el.querySelector('.b-basket__tab-title').innerHTML
                        = el.querySelector('.b-basket__tab-title').innerHTML
                        + ' (' + el.dataset.id + ')'
                }

                break
            }
        }

    }, 1700 )
})()

;(() => {

    const el = document.createElement('div')

    const addBanner = (color, text) => {

        el.style.backgroundColor = color
        el.style.color = 'white'
        el.style.position = 'fixed'
        el.style.top = 0
        el.style.left = 0
        el.style.right = 0
        el.style.zIndex = 88888888
        el.style.fontSize = '10px'
        el.style.textAlign = 'center'
        el.innerHTML = text
        document.body.append(el)
    }

    if (location.host === 'mi-shop.com') {

        addBanner('red', 'PROD')
    }

    if (location.host === 'bab.mi-shop.com' || location.host === 'dev.mi-shop.com') {

        addBanner('orange', 'Dev Remote')
    }

    if (location.host === 'promo.mi-shop.com') {

        addBanner('green', 'Dev Local')
    }

    if (location.pathname.indexOf('/bitrix/admin') === 0) {

        el.style.fontSize = '17px'
    }
})()

;(() => {

    if (location.pathname !== '/bitrix/admin/fileman_admin.php') {
        return;
    }

    const quickPathElId = 'quick_path'

    const setQuickPathWidth = () => {
        document.getElementById(quickPathElId).style.width = ''
        document.getElementById(quickPathElId).style.width =
            parseInt(window.getComputedStyle(
                document.getElementById('tbl_fileman_admin_result_div')
            ).width) - 257 + 'px'
    }

    window.addEventListener('resize', setQuickPathWidth, true)

    setQuickPathWidth()

    const clearEventsInterval = setInterval(function () {
        if (BX(quickPathElId).onclick === null) {
            return
        }
        BX(quickPathElId).onclick = () => {}
        clearInterval(clearEventsInterval)
    }, 88)

})()