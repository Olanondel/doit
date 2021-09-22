<template>
  <section class='container'>
    <div class='error'>
      <div class='error__text'>
        <div>
          <p>Are you lost?</p>
          <p>Please back to the game!</p>
        </div>
      </div>

      <div class='error__code'>
        404
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style lang='scss' scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
  }

  .error {
    flex: 0 1 96%;
    width: 100%;
    height: 334px;
    display: flex;
    justify-content: center;
    font-family: 'Roboto';

    .error__text {
      display: flex;
      justify-content: center;
      padding-left: 7%;
      padding-right: 4%;
      flex-direction: column;
      flex: 0 0 50%;
      color: #fff;
      font-size: 30px;
      line-height: 39px;
      white-space: nowrap;
      border: 1px solid transparent;
      border-image: linear-gradient(to right, #0a68f5 10%, transparent 90%);
      border-image-slice: 1;
      border-right: none;
      border-left-color: #1472FF;
    }

    .error__code {
      display: flex;
      padding-left: 7%;
      align-items: center;
      flex: 0 0 50%;
      background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
      font-weight: 700;
      font-size: 116px;
      line-height: 116px;
      color: #0F1215;
    }
  }

  @media (max-width: 991px) {
    .error {
      .error__text {
        font-size: 24px;
      }

      .error__code {
        font-size: 84px;
      }
    }
  }

  @media (max-width: 767px) {
    .container {
      margin-bottom: 62px;
    }

    .error {
      .error__text {
        padding-left: 4%;
        padding-right: 2%;
      }

      .error__code {
        padding-left: 4%;
      }
    }
  }

  @media (max-width: 575px) {
    .container {
      background: linear-gradient(180deg, rgba(20, 114, 255, 0) 16.67%, #1472FF 100%);
      margin: 0 -15px 62px;
      align-items: center;
      justify-content: center;
      width: auto;
      text-align: center;
    }

    .error {
      flex: auto;
      flex-direction: column;
      height: auto;

      .error__text {
        order: 2;
        font-weight: 500;
        font-size: 30px;
        color: #0F1215;
        border: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        align-items: center;
      }

      .error__text > div {
        max-width: 300px;
        white-space: normal;
      }

      .error__code {
        color: #fff;
        order: 1;
        font-size: 100px;
        background: none;
        padding: 0;
        margin: 0;
        align-self: center;
      }
    }
  }
</style>
