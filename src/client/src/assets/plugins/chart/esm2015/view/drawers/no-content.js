import { ChartJsExtension } from '../../base/chart-base-extension';
export class NoContentPlugin extends ChartJsExtension {
    afterDraw(chart) {
        if (chart.data.datasets.length === 0) {
            // No data is present
            var ctx = chart.chart.ctx;
            var width = chart.chart.width;
            var height = chart.chart.height;
            //chart.clear();
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = "#D8D9DA";
            ctx.font = "16px normal 'Roboto'";
            ctx.fillText('No data points', width / 2, height / 2);
            ctx.restore();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC9wbHVnaW5zL3dpZGdldHMvY2hhcnQvc3JjL3ZpZXcvZHJhd2Vycy9uby1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUVwRCxTQUFTLENBQUUsS0FBSztRQUNmLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQyxxQkFBcUI7WUFDckIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDL0IsZ0JBQWdCO1lBRWhCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNYLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUM7WUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDZDtJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0SnNFeHRlbnNpb24gfSBmcm9tICcuLi8uLi9iYXNlL2NoYXJ0LWJhc2UtZXh0ZW5zaW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb0NvbnRlbnRQbHVnaW4gZXh0ZW5kcyBDaGFydEpzRXh0ZW5zaW9uIHtcclxuXHJcblx0YWZ0ZXJEcmF3IChjaGFydCkge1xyXG5cdFx0aWYgKGNoYXJ0LmRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdC8vIE5vIGRhdGEgaXMgcHJlc2VudFxyXG5cdFx0XHR2YXIgY3R4ID0gY2hhcnQuY2hhcnQuY3R4O1xyXG5cdFx0XHR2YXIgd2lkdGggPSBjaGFydC5jaGFydC53aWR0aDtcclxuXHRcdFx0dmFyIGhlaWdodCA9IGNoYXJ0LmNoYXJ0LmhlaWdodFxyXG5cdFx0XHQvL2NoYXJ0LmNsZWFyKCk7XHJcblxyXG5cdFx0XHRjdHguc2F2ZSgpO1xyXG5cdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcblx0XHRcdGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiI0Q4RDlEQVwiO1xyXG5cdFx0XHRjdHguZm9udCA9IFwiMTZweCBub3JtYWwgJ1JvYm90bydcIjtcclxuXHRcdFx0Y3R4LmZpbGxUZXh0KCdObyBkYXRhIHBvaW50cycsIHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XHJcblx0XHRcdGN0eC5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59Il19