import React from 'react'
import ExclamationMark from '../../assets/images/exl.svg'

export const Info = () => {
  return (
    <div className="mb-20 md:mb-28">
        <article className="flex flex-col mb-16 md:mb-20 md:flex-row md:justify-between">
            <h2 className="text-xl mb-7 font-bold md:text-5xl md:flex-[1_1_50%]">Як говорити з <br/> росіянами про війну</h2>
            <div className="flex-[1_1_50%]">
                <p className="mb-4">
                    24 лютого 2022 року російські війська вторглися на територію суверенної України. Росія роками готувалася до нападу, транслюючи меседжі про нацистів і бендерівців, від яких Україну потрібно рятувати. Всього за тиждень війни рейтинг Путіна зріс на 11%. Сьогодні, щоб зупинити Путіна, треба пояснити росіянам, що відбувається насправді.
                </p>
                <p>
                    Російська влада називає війну “спецоперацією”. Президента України, російськомовного єврея — нацистом. Орвелл відпочиває.
                    На цьому сайті зібрані основні тези російської пропаганди і контраргументи до них, засновані на фактах і логіці. Ми можемо продемонструвати росіянам реальні докази брехні російської влади і пропагандистської машини.
                </p>
            </div>
        </article>
        <div className="instruction">
            <img src={ExclamationMark} alt="attention" />
            <div>
                Якщо інформація актуальна, натискайте <b>“Важливо”</b>, якщо ні — <b>“Неважливо”</b>.
                <br />
                Це допоможе покращити наповнення сайту.
            </div>
        </div>
    </div>
  )
}
