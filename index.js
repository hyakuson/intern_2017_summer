var $ = window.$;
//====== ここからユーティリティ関数 ======//
var showTip = function ($Obj, message) {
		$Obj
			.addClass('failar')
			.attr('title', message);
		// see also http://vadikom.com/demos/poshytip/
		$Obj.poshytip({
			className: 'tip-twitter',
			alignTo: 'target',
			alignX: 'right',
			alignY: 'center',
			offsetX: 5
		});
	};
var clearAllTip = function () {
		var elems = ['span', 'input', 'select'];
		$(elems).each(function (index, elem) {
			$(elem)
				.poshytip('destroy')
				.attr('title', '')
				.removeClass('failar');
		});
	};
var isEmpty = function (value) {
		if (value === '') {
			return true;
		} else {
			return false;
		}
	},
	isNotEmpty = function (value) {
		return isEmpty(value);
	};
	// 分形式のvalueを「〇h〇min」形式の文字列に変換する
var minutes2HourMinutes = function (value) {
		var hour = Math.floor(value / 60);
		var minute = value % 60;
		return hour + 'h' + minute + 'min';
	},
	// 「hour時間minutes分」を分形式に変換する
	hourMinutes2minutes = function (hour, minutes) {
		return hour * 60 + minutes;
	};
//====== ここまでユーティリティ関数 ======//

/**
 * 勤務時間変更時の処理
 */
var workTimeChangeListener = function () {
/*
	// 入力内容を取得する
	var workStartHH = parseInt($('#workStartHour').val(), 10);
	var workStartMI = parseInt($('#workStartMinute').val(), 10);
	var workEndHH = parseInt($('#workEndHour').val(), 10);
	var workEndMI = parseInt($('#workEndMinute').val(), 10);

	// TODO: 1.勤務開始・終了時間を分数に変換
	var workStartTime = ？？？
	var workEndTime = ？？？
	
	// TODO: 勤務終了時刻が開始時刻よりも早い場合、終了時刻は翌日の時刻であるとする
	if (？？？) {
		？？？
	}
	
	// TODO: 2.勤務時間の計算
	var totalWorkTime = ？？？
	var totalWorkTimeHHMI = ？？？
	// 勤務時間の表示
	$('#totalWorkTime').text(totalWorkTimeHHMI);
	$('#totalWorkTime').attr('data-totalWorkTime', totalWorkTime); // 総労働時間をプロジェクトの割合計算で使うために裏で持っておく

	// 工数の計算を走らせるために稼働割合を変更したことにする
	$('[name="projectWorkPercentage"]').trigger('change');
*/
};

/**
 * 稼働割合変更時の処理
 */
var projectWorkPercentageChangeListener = function (e) {
/*
	// プロジェクトNのパーセンテージの取得(e.targetでイベント発生元要素が取得できる)
	var percentage = $(e.target).val();

	// 勤務時間のデータ属性の値を取得(分)
	var totalWorkTime = parseInt($('#totalWorkTime').attr('data-totalWorkTime'), 10);

	// TODO: 3.プロジェクトNに費やした時間を計算
	var projectWorkTime = ？？？
	
	// TODO: 4.プロジェクトNに費やした時間を〇h〇min形式で表示
	$(e.target).parent().children('[name="projectTime"]').text(？？？);

	// 以下総パーセンテージの計算
	var totalPercentage = 0;
	$('[name="projectWorkPercentage"]').each(function (index, element) {
		totalPercentage += parseInt($(element).val(), 10);
	});

	// 稼働割合合計を表示
	$('#projectTotal').text(totalPercentage + '%');
	// チェック用に裏で稼働割合合計を持たせておく
	$('#projectTotal').attr('data-totalPercentage', totalPercentage);
*/
};

/**
 * チェックボタン押下時の処理
 */
var checkButtonClickListener = function () {
/*
	// エラーフラグ
	var isError = false;

	// エラーのスタイルをクリア
	clearAllTip();

	// 稼働割合合計のデータ属性から値を取得
	var percentageTotal = parseInt($('#projectTotal').attr('data-totalPercentage'), 10);

	// プロジェクトの稼働割合合計が100%でない場合
	if (percentageTotal !== 100) {
		// 稼働割合合計にエラーチップを表示
		showTip($('#projectTotal'), 'トータルが100%となるよう各プロジェクトの稼働割合を選択してください。');
		isError = true;
	}

	// パーセンテージが入力されているのにプロジェクト名が入力されていないプロジェクトがないかチェック
	$('[name="projectWorkPercentage"]').each(function (index, element) {
		// 稼働割合
		var percentage = parseInt($(element).val(), 10);
		// プロジェクト名のjQueryオブジェクト
		var $prjName = $(element).parent().children('input[name="projectName"]');
		// プロジェクト名
		var strPrjName = $prjName.val();

		// TODO: 5.稼働割合が0でないのにプロジェクト名が入力されていない場合
		if (？？？) {
			// プロジェクト名にエラーを表示、エラーフラグを立てる
			？？？
		}
	});

	// ここをいじったら死ぬ
	if (isError === true) {
		// エラーがあったらぶるぶるさせる
		$('#errorStatus')
			.removeClass('hidden failar success')
			.addClass('failar')
			.text('Error occured.');
		// 再度アニメーションさせるために一回削除
		var $el = $('#errorStatus');
		var $new = $el.clone(true);
		$el.before($new);
		$el.remove();
	} else {
		$('#errorStatus')
			.removeClass('hidden failar success')
			.addClass('success')
			.text('Complete!')
			.hide()
			.fadeIn("slow");
	}
*/
};

// HTML(DOM)読み込み終了時に実行する処理
$(document).on('ready', function () {

	// 勤務時間プルダウンのいずれかを変更したらこの中の処理が実行される
	$('[name="workTime"]').on('change', workTimeChangeListener);

	// プロジェクトの割合プルダウンの変更時の処理
	$('[name="projectWorkPercentage"]').on('change', projectWorkPercentageChangeListener);

	// チェックボタンが押されたときの処理
	$('#btn_check').on('click', checkButtonClickListener);
});
