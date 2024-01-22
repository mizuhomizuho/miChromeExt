
'use strict'

!(() => {

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