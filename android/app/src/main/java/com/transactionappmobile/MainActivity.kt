package com.transactionappmobile

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "TransactionAppMobile"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flag [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    val initialProps = Bundle().apply {
      putString("env", BuildConfig.ENV)
      putString("baseUrl", BuildConfig.BASE_URL)
    }

    return object : DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled) {
      override fun getLaunchOptions(): Bundle? {
        return initialProps
      }
    }
  }
}
