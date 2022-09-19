import $, { isPlainObject } from 'jquery'
import './app2.css'
const $tabBar = $("#app2 .nav_bar");
const $tabContent = $("#app2 .nav_content")
$tabBar.on('click', 'div', e => {
    const $div = $(e.currentTarget)
    $div.addClass('selected').siblings().removeClass('selected')
    const index = $div.index()
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')

})
$tabBar.children().eq(0).trigger('click')