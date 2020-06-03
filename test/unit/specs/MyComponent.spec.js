import Vue from 'vue'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('计数器在点击按钮时自增', () => {
    // 获取mount中的组件实例
    const vmComponent = new Vue(MyComponent).$mount();
    // 点击之前
    console.log('计数器点击之前的值：' + vmComponent.count);
    // 调用实例中的increment方法，点击计数器
    vmComponent.increment();
    // 点击之后
    console.log('计数器点击之后的值：' + vmComponent.count);
    // 判断最后的count是否为最后对应的值
    expect(vmComponent.count).toBe(1);
  })
})