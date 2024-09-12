<script setup>
import { historyText } from "../constants";
</script>

<template>
    <section id="history">
        <div class="history__inner">
            <h2 class="history__title">
                history <em>나의 히스토리</em>
            </h2>
            <div class="history__desc">
                <div v-for="(history, index) in historyText" :key="index" class="history__item">
                    <span>{{ history.customText }}</span>
                    <div v-for="(detail, i) in history.details" :key="i" class="history__detail">
                        <h3>{{ detail.title }}</h3>
                        <p>{{ detail.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.history__inner {
    padding: 16px;
    display: flex;
    justify-content: space-between; /* 좌우로 배치 유지 */
    align-items: flex-start; /* 수직 정렬 */

    @media (max-width: 800px) { 
        flex-direction: column; /* 모바일에서는 위아래로 배치 */
    }
}

.history__title {
    position: sticky;
    top: 70px;
    left: 0;
    width: 48%; /* 왼쪽에 제목 */
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);

    @media (max-width: 800px) { 
        width: 100%;
        margin-bottom: 10vw;
        font-size: 30px;
        height: auto;
        top: 68px;
        background-color: var(--mainBg-color);
    }

    em {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 2;
    }
}

.history__desc {
    width: 50%; /* 오른쪽에 내용 */
    display: flex;
    flex-direction: column; /* 경력과 학력을 세로로 배치 */
    justify-content: flex-start; /* 위에서 아래로 배치 */

    @media (max-width: 800px) { 
        width: 100%;
    }

    .history__item {
        margin-bottom: 2rem; /* 각 경력 및 학력 항목 간 간격 */
    }

    span {
        font-size: 5vw;
        font-weight: 900;
        line-height: 1.3;
        font-family: var(--mainNum-font);
        margin-bottom: 1rem;

        @media (max-width: 800px) { 
            font-size: 20vw;
        }
    }

    .history__detail {
        margin-bottom: 1.5rem; /* 제목과 설명 간 간격 */
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem; /* 제목과 설명 사이 간격 */
        text-decoration: underline;
        text-underline-position: under;
    }

    p {
        font-size: 1.1rem;
    }
}
</style>
