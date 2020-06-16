import React from 'react';
import './Pager.css';

/**
 * @description 分页组件
 * @param {Number} props.current 初始页码
 * @param {Number} props.total 总条数
 * @param {Number} [props.limit] 每页显示的总数据量
 * @param {Number} [props.panelNumber] 最多显示的页码个数
 * @param {Function} props.onPageChange 页码改变的事件
 */

export default function Pager(props) {
  // props.limit = props.limit || 10;
  // props.panelNumber = props.panelNumber || 5;
  const totalPage = getTotalPage(props);
  const range = getPanelRange(props, totalPage);
  const numbers = [];
  for (let i = range[0]; i <= range[1]; i++) {
    numbers.push(<span key={i} className={props.current === i ? "item active" : "item"}
                       onClick={() => jump2Page(i, props, totalPage)}>{i}</span>)
  }
  return (
      <>
        <span onClick={() => jump2Page(1, props, totalPage)}
              className={props.current === 1 ? "item disabled" : "item"}>首页</span>
        <span onClick={() => jump2Page(props.current - 1, props, totalPage)}
              className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
        {numbers}
        <span onClick={() => jump2Page(props.current + 1, props, totalPage)}
              className={props.current >= totalPage ? "item disabled" : "item"}>下一页</span>
        <span onClick={() => jump2Page(totalPage, props, totalPage)}
              className={props.current >= totalPage ? "item disabled" : "item"}>尾页</span>
        <span>{props.current}/{totalPage}</span>
      </>
  )
}

/**
 * @description 该函数返回总页数
 * @param {Object} props
 * @returns {Number} 总页数
 */

function getTotalPage(props) {
  return Math.ceil(props.total / props.limit)
}

/** @description 跳转到指定页面
 * @param {Number} target
 * @param {Object} props
 * @param totalPage
 */

function jump2Page(target, props, totalPage) {
  if (target === props.current || target < 1 || target > totalPage) {
    return;
  }
  props.onPageChange && props.onPageChange(target)
}

/**
 * @description 获取页码显示的范围
 * @param props
 * @param {number} totalPage 总页数
 * @returns {(number|number)[]}
 */

function getPanelRange(props, totalPage) {
  const panelNumber = totalPage < props.panelNumber ? totalPage : props.panelNumber
  let min = props.current - Math.floor(panelNumber / 2);
  if (min > totalPage - panelNumber) {
    min = totalPage - panelNumber
  }
  if (min < 1) {
    min = 1
  }
  let max = min + panelNumber;
  if (max > totalPage) {
    max = totalPage
  }
  return [min, max];
}
