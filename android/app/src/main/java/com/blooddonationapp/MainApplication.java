package com.blooddonationapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
// import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
// import com.reactnative.ivpusic.imagepicker.PickerPackage;
// import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.imagepicker.ImagePickerPackage;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            // new FBSDKPackage(),
            new RNFetchBlobPackage(),
            // new PickerPackage(),
            // new SplashScreenReactPackage(),
            new ImagePickerPackage(),
            new ReactNativeIcons(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}