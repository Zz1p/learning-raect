import React from 'react';
import './Pager.css';

/**
 * 分页组件
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
  return (
      <>
        <span
            onClick={() => {
              if (props.current === 1) {
                return;
              }
              props.onPageChange && props.onPageChange();
            }}
            className={props.current === 1 ? "item disabled" : "item"}>首页</span>
        <span className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
        <span className={props.current >= totalPage ? "item disabled" : "item"}>下一页</span>
        <span className={props.current >= totalPage ? "item disabled" : "item"}>首页</span>
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

/**
 * @method jump2Page
 * @param {Number} page
 */

function jump2Page(page) {

}
