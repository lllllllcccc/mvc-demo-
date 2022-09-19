import $ from 'jquery'
import './app1.css'
const $number = $('.output #number')
const $button1 = $('.actions #add1')
const $button2 = $('.actions #minus1')
const $button3 = $('.actions #mul2')
const $button4 = $('.actions #divide2')
const n = localStorage.getItem("n")
$number.text(n || 100)

$button1.on('click', () => {
    let n = parseInt($number.text())
    n += 1;
    localStorage.setItem("n", n)
    $number.text(n)
})
$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1;
    localStorage.setItem("n", n)
    $number.text(n)
})
$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2;
    localStorage.setItem("n", n)
    $number.text(n)
})
$button4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2;
    localStorage.setItem("n", n)
    $number.text(n)
})